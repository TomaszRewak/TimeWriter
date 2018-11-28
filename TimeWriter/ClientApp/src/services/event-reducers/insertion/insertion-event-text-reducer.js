import TextProcessing from "../../text-utils/text-processing";
import CaretPositionService from "../../document-navigation/caret-position-service";

export default class InsertionEventTextReducer {
	constructor() {
		this._caretPositionService = new CaretPositionService();
	}

	reduce(document, event) {
		const firstTextPart = document.text.substring(0, event.caret.position);
		const secondTextPart = document.text.substring(event.caret.position);

		return `${firstTextPart}${event.text}${secondTextPart}`;
	}
}