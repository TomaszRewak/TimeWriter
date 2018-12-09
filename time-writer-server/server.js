import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';

import documentRepository from './documents/document-repository'

const port = process.env.PORT || 1337;
const app = express();
const server = http.Server(app);
const io = new socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

io.origins(['http://localhost:8080']);
io.on('connection', socket => {
	console.log('connected to web socket');
	socket.on('document change', event => {
		console.log(event);
		socket.broadcast.emit('document change', event);
	});
});

app.get(['/document/:documentId'], (req, res) => {
	const text = documentRepository.getText(req.params.documentId);

	res.send(text);
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`));