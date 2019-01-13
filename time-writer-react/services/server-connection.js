import SocketIO from 'socket.io-client';

export default class ServerConnection {
	constructor(documentId) {
		this._serverUrl = `http://localhost:1337`;
		//this._serverUrl = `https://api.text-sourcing.tomasz-rewak.com`;
		this._documentId = documentId;
	}

	connect(documentSnapshot, documentChange) {
		this.disconnect();

		this._socket = this._createSocket();
		this._socket.on('document snapshot', documentSnapshot);
		this._socket.on('document change', documentChange);
	}

	disconnect() {
		if (!this._socket)
			return;

		this._socket.disconnect();
		this._socket = null;
	}

	sendEvent(event, callback) {
		this._socket.emit('document change', event, timestamp => callback(event, timestamp));
	}

	async getCurrentState() {
		const response = await fetch(`${this._serverUrl}/document/${this._documentId}`);
		const currentState = await response.json();

		return currentState;
	}

	_createSocket() {
		return SocketIO(`${this._serverUrl}?document=${this._documentId}`);
	}
}