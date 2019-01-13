import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import cors from 'cors';
import schedule from 'node-schedule';

import getDocument from './get'
import handleSocketConnection from './socket'
import documentRepository from './../documents/document-repository'

const port = process.env.PORT || 1337;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: ['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com'] }));
app.get(['/document/:documentId'], getDocument);

const server = http.Server(app);
const io = new socketIO(server);

io.origins(['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com:80']);
io.on('connection', handleSocketConnection);

server.listen(port, () => console.log(`Example app listening on port ${port}!`));

schedule.scheduleJob({hour: 0, minute: 0}, function(){
	documentRepository.removeOldDocuments()
});