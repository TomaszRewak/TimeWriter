import TextDocument from '../../time-writer-event-sourcing/document/text-document';

class DocumentRepository
{
	constructor () {
		this._documents = {
			1: new TextDocument()
		};
	}

	getState(documentId) {
		return this._documents[documentId].state;
	}

	addEvent(documentId, event) {
		this._documents[documentId].addEvent(event);
	}
}

const documentRepository = new DocumentRepository();

export default documentRepository;