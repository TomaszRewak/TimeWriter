import documentRepository from './../documents/document-repository';

class SocketConnection {
	constructor(socket) {
		this._socket = socket;
		this._documentId = socket.handshake.query.document;
		this._document = documentRepository.getDocument(this._documentId)

		this._initialize();
	}

	_initialize() {
		this._socket.join(this._documentId);

		this._socket.on('document change', this._onDocumentChanged.bind(this));	
		this._socket.on('disconnect', this._onDisconected.bind(this));
	}

	_prepareEvent(event) {
		return {
			...event,
			timestamp: Date.now(),
			author: this._socket.id
		};
	}

	_addEvent(event) {
		event = this._prepareEvent(event);

		this._document.addEvent(event);
		this._socket
			.broadcast
			.to(this._documentId)
			.emit('document change', event);

		return event;
	};

	_onDocumentChanged(event, callback) {
		try {
			event = this._addEvent(event);
			callback(event.timestamp);
		}
		catch (e) {
			callback(null);
		}
	}

	_onDisconected() {
		this._addEvent({ type: 'manage-carets', operation: 'remove-carets' });
	}
}

export default function handleSocketConnection(socket) {
	const connection = new SocketConnection(socket);
}