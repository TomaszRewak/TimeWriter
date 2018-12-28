import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import cors from 'cors';

import documentRepository from './../documents/document-repository'

const port = process.env.PORT || 1337;
const app = express();

const origins = ['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com'];

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: origins}));
app.get(['/document/:documentId'], (req, res) => {
	const documentState = documentRepository.getDocument(req.params.documentId).state;

	res.json(documentState);
});

const server = http.Server(app);
const io = new socketIO(server);

io.origins(['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com:80']);
io.on('connection', socket => {
	console.log('Got connected!');

	let documentId = socket.handshake.query.document;
	console.dir(documentId);

	const document = documentRepository.getDocument(documentId);

	const add = (event) => {
		console.log(event);

		document.addEvent(event);
		socket.broadcast.emit('document change', event);
	};

	socket.on('document change', (event, callback) => {
		const timestamp = Date.now();

		const signedEvent = {
			...event,
			timestamp,
			author: socket.id
		};

		add(signedEvent);
		callback(timestamp);
	});

	socket.on('disconnect', function () {
		console.log('Got disconnected!');
		add({author: socket.id, type: 'manage-carets', operation: 'remove-carets'});
	});
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`));