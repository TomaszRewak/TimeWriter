import TextDocument from '../../time-writer-event-sourcing/document/text-document';

class DocumentRepository
{
	constructor () {
		this._documents = new Map();
	}

	getDocument(documentId)
	{
		this._createIfDoesntExist(documentId);

		return this._documents.get(documentId);
	}

	_createIfDoesntExist(documentId)
	{
		if (!this._documents.has(documentId))
			this._documents.set(documentId, new TextDocument());
	}
}

const documentRepository = new DocumentRepository();

export default documentRepository;