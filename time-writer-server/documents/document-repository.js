import TextDocument from '../../time-writer-event-sourcing/document/text-document';

class DocumentRepository
{
	constructor () {
		this._documents = {
			1: new TextDocument()
		};
	}

	getText(documentId) {
		return this._documents[documentId].state.text;
	}
}

const documentRepository = new DocumentRepository();

export default documentRepository;