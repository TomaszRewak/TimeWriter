import TextDocument from '../../time-writer-event-sourcing/document/text-document';

class DocumentRepository
{
	constructor () {
		this._documents = new Map();
	}

	getDocument(documentId)
	{
		this._createIfDoesntExist(documentId);

		const document = this._documents.get(documentId);
		document.lastAccess = new Date();

		return document;
	}

	removeOldDocuments() {
		const ageLimit = new Date();
		ageLimit.setDate(ageLimit.getDate() - 3);

		for (const document of this._documents.keys())
			if (this._documents.get(document).lastAccess < ageLimit)
				this._documents.delete(document);
	}

	_createIfDoesntExist(documentId)
	{
		if (!this._documents.has(documentId))
			this._documents.set(documentId, new TextDocument());
	}
}

const documentRepository = new DocumentRepository();

export default documentRepository;