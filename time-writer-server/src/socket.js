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
		const preparedEvent = this._prepareEvent(event);
		const success = this._document.addEvent(preparedEvent)

		if (!success)
			return null;

		this._broadcastEvent(preparedEvent);
		return preparedEvent.timestamp;
	};

	_broadcastEvent(event) {
		this._socket
			.broadcast
			.to(this._documentId)
			.emit('document change', event);
	}

	_onDocumentChanged(event, callback) {
		try {
			callback(this._addEvent(event));
		}
		catch (e) {
			console.log(e);
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