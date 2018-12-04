const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const port = process.env.PORT || 1337;
const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
	console.log('connected to web socket');
	socket.on('modify document', event => {
		console.log('modify document');
		socket.broadcast.emit('modify document', event);
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));