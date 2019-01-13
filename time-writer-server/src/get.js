import documentRepository from './../documents/document-repository'

export default function getDocument(req, res) {
	const document = documentRepository.getDocument(req.params.documentId).history;

	res.json(document);
}