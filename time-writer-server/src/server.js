import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import cors from 'cors';

import documentRepository from './../documents/document-repository'

const port = process.env.PORT || 1337;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: ['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com'] }));
app.get(['/document/:documentId'], (req, res) => {
	const document = documentRepository.getDocument(req.params.documentId).history;
	console.dir(document);

	res.json(document);
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
		const signedEvent = {
			...event,
			author: socket.id
		};

		document.addEvent(signedEvent);
		socket.broadcast.emit('document change', signedEvent);
	};

	socket.on('document change', (event, callback) => {
		try {
			add(event);
			callback(true);
		}
		catch (e) {
			callback(false);
		}
	});

	socket.on('disconnect', function () {
		console.log('Got disconnected!');
		add({ type: 'manage-carets', operation: 'remove-carets', timestamp: Date.now() });
	});
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`));