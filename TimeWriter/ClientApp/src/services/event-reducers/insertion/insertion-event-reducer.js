import InsertionEventTextReducer from "./insertion-event-text-reducer";
import InsertionEventCaretReducer from "./insertion-event-caret-reducer";

export default class InsertionEventReducer {
	constructor() {
		this._textReducer = new InsertionEventTextReducer();
		this._caretReducer = new InsertionEventCaretReducer();
	}

	reduce(document, event) {
		const authorsCarets = this._getAuthorsCarets(document.carets, event.author);

		for (let authorCaret of authorsCarets)
			document = this._reduceUsingCaret(document, event, authorCaret);

		return document;
	}

	_getAuthorsCarets(carets, author) {
		return carets
			.filter(caret => caret.owner === author)
			.map(caret => caret.id);
	}

	_getCaret(carets, id) {
		return carets
			.find(caret => caret.id === id);
	}

	_reduceUsingCaret(document, event, caretId) {
		const caret = this._getCaret(document.carets, caretId);

		if (caret.owner !== event.author)
			return document;

		return this._reduceDocument(document, caret.begin, event.text);
	}

	_reduceDocument(document, begin, text) {
		return {
			...document,
			lines: this._reduceLines(document.lines, begin, text),
			carets: this._reduceCarets(document.carets, begin, text.length)
		};
	}

	_reduceLines(lines, begin, text) {
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

	_reduceCarets(carets, begin, by) {
		return carets.map(caret => this._reduceCaret(caret, begin, by));
	}

	_reduceCaret(caret, start, by) {
		const newBegin = this._reducePosition(caret.begin, start, by);
		const newEnd = this._reducePosition(caret.end, start, by);

		if (caret.begin === newBegin && caret.end === newEnd)
			return caret;

		return {
			...caret,
			begin: newBegin,
			end: newEnd
		};
	}

	_reducePosition(position, start, by) {
		if (this._comparePositions(position, start) < 0)
			return position;

		return {
			...position,
			column: position.column + by
		};
	}

	_comparePositions(positionA, positionB) {
		const lineDiff = Math.sign(positionA.line - positionB.line);
		const columnDiff = Math.sign(positionA.column - positionB.column);

		return Math.sign(lineDiff * 2 + columnDiff);
	}
}