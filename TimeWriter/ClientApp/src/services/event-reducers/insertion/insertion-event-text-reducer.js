export default class InsertionEventTextReducer {
	reduce(document, event) {
		const firstTextPart = document.text.substring(0, event.caret.position);
		const secondTextPart = document.text.substring(event.caret.position);

		return `${firstTextPart}${event.text}${secondTextPart}`;
	}
}