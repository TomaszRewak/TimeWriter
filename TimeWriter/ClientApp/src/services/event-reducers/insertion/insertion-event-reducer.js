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

		return this._reduceDocument(document, caret, event.text);
	}

	_reduceDocument(document, caret, text) {
		return {
			...document,
			lines: this._textReducer.reduce(document.lines, caret.begin, text),
			carets: this._caretReducer.reduce(document.carets, caret.begin, text.length)
		};
	}
}