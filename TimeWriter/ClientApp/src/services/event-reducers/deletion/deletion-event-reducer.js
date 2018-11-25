import DeletionEventTextReducer from "./deletion-event-text-reducer";
import DeletionEventCaretReducer from "./deletion-event-caret-reducer";

export default class DeletionEventReducer {
	constructor() {
		this._textReducer = new DeletionEventTextReducer();
		this._caretReducer = new DeletionEventCaretReducer();
	}

	reduce(document, event) {


		return {
			...document,
			carets: this._caretReducer.reduceCarets(document, event),
			text: this._textReducer.reduceText(document, event)
		};
	}
}