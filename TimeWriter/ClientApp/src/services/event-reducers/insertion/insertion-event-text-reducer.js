import TextProcessing from "../../text-utils/text-processing";
import CaretPositionService from "../../document-navigation/caret-position-service";

export default class InsertionEventTextReducer {
	constructor() {
		this._caretPositionService = new CaretPositionService();
	}

	reduceText(document, event) {
		const caretPositions = this._caretPositionService.getActiveCaretPositions(document.carets, event.author);
		const textParts = TextProcessing.splitText(document.text, caretPositions);

		return this._insertTextBetweenParts(textParts, event.text);
	}

	_insertTextBetweenParts(textParts, separator) {
		return textParts.join(separator);
	}
}