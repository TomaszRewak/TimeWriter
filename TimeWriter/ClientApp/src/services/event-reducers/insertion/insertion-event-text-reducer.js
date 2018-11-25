import TextProcessing from "../../text-utils/text-processing";
import CaretPositionService from "../../document-navigation/caret-position-service";

export default class InsertionEventTextReducer {
	constructor() {
		this._caretPositionService = new CaretPositionService();
	}

	reduce(lines, begin, text) {
		return lines.map((line, lineIndex) => this._reduceLine(line, lineIndex, begin, text));
	}

	_reduceLine(line, lineIndex, begin, text) {
		if (lineIndex !== begin.line)
			return line;

		return {
			...line,
			text: this._insertText(line.text, begin.column, text)
		};
	}

	_insertText(lineText, column, text) {
		const firstTextPart = lineText.substring(0, column);
		const secondTextPart = lineText.substring(column);

		return `${firstTextPart}${text}${secondTextPart}`;
	}
}