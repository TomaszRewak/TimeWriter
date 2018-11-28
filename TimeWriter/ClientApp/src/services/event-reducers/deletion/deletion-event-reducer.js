import DeletionEventTextReducer from "./deletion-event-text-reducer";
import DeletionEventCaretReducer from "./deletion-event-caret-reducer";

export default class DeletionEventReducer {
	constructor() {
		this._textReducer = new DeletionEventTextReducer();
		this._caretReducer = new DeletionEventCaretReducer();
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