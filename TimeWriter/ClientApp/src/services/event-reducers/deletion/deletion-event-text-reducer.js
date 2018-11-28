export default class DeletionEventTextReducer {
	reduce(document, event) {
		const firstTextPart = document.text.substring(0, event.caret.position - event.length);
		const secondTextPart = document.text.substring(event.caret.position);

		return `${firstTextPart}${secondTextPart}`;
	}
}