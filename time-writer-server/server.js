const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

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

server.listen(port, () => console.log(`Example app listening on port ${port}!`));