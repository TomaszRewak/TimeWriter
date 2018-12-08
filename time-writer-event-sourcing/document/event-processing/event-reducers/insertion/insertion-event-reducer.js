import InsertionEventTextReducer from "./insertion-event-text-reducer";
import InsertionEventCaretReducer from "./insertion-event-caret-reducer";

export default class InsertionEventReducer {
	constructor() {
		this._textReducer = new InsertionEventTextReducer();
		this._caretReducer = new InsertionEventCaretReducer();
	}

	reduce(document, event) {
		for (let caret in document.carets)
			document = this._reduceUsingCaret(document, { ...event, caret: document.carets[caret] });

		return document;
	}

	_reduceUsingCaret(document, event) {
		if (event.author !== event.caret.owner)
			return document;

		return {
			...document,
			text: this._textReducer.reduce(document, event),
			carets: this._caretReducer.reduce(document, event)
		};
	}
}