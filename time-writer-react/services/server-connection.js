import SocketIO from 'socket.io-client';

export default class ServerConnection {
	constructor(documentId)
	{		
		this._serverUrl = `http://localhost:1337`;
		//this._serverUrl = `http://api.text-sourcing.tomasz-rewak.com`;
		this._documentId = documentId;
	}

	connect() {
	}

	async getCurrentState() {
		const response = await fetch(`${this._serverUrl}/document/${this._documentId}`);
		const currentState = await response.json();

		return currentState;
	}

	createSocket() {
		return SocketIO(`${this._serverUrl}?document=${this._documentId}`);
	}
}