import InsertionEventTextReducer from "./insertion-event-text-reducer";
import InsertionEventCaretReducer from "./insertion-event-caret-reducer";

export default class InsertionEventReducer {
	constructor() {
		this._textReducer = new InsertionEventTextReducer();
		this._caretReducer = new InsertionEventCaretReducer();
	}

	reduce(document, event) {
		return {
			...document,
			carets: this._caretReducer.reduceCarets(document, event),
			text: this._textReducer.reduceText(document, event)
		};
	}
}