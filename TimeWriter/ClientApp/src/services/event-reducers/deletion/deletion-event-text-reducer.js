import TextProcessing from "../../text-utils/text-processing";
import CaretPositionService from "../../document-navigation/caret-position-service";

export default class DeletionEventTextReducer {
	constructor() {
		this._caretPositionService = new CaretPositionService();
	}

	reduceText(document, event) {
		const caretPositions = this._caretPositionService.getActiveCaretPositions(document.carets, event.author);
		const textParts = TextProcessing.splitText(document.text, caretPositions);

		return this._removeTextBetweenParts(textParts, event.length);
	}

	_removeTextBetweenParts(textParts, length) {
		const [firstPart, ...tailParts] = textParts;

		return [
			firstPart,
			...tailParts.map(part => this._removeBaginningFromTextPart(part, length))
		].join('');
	}

	_removeBaginningFromTextPart(textPart, length) {
		return textPart.substring(length);
	}
}