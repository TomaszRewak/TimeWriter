export default class DeletionEventTextReducer {
	reduce(document, event) {
		const firstTextPart = document.text.substring(0, event.beginPosition);
		const secondTextPart = document.text.substring(event.endPosition);

		return `${firstTextPart}${secondTextPart}`;
	}
}