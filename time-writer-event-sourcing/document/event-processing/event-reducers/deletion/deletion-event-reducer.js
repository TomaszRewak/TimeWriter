import DeletionEventTextReducer from "./deletion-event-text-reducer";
import DeletionEventCaretReducer from "./deletion-event-caret-reducer";
import DeletionEventPreProcessor from "./deletion-event-pre-processing";

export default class DeletionEventReducer {
	constructor() {
		this._eventPreProcessor = new DeletionEventPreProcessor();

		this._textReducer = new DeletionEventTextReducer();
		this._caretReducer = new DeletionEventCaretReducer();
	}

	reduce(document, event) {
		for (let caret in document.carets)
			document = this._reduceUsingCaret(document, event, document.carets[caret]);

		return document;
	}

	_reduceUsingCaret(document, event, caret) {
		if (event.author !== caret.owner)
			return document;

		event = this._eventPreProcessor.prepareEvent(document, event, caret);

		return {
			...document,
			text: this._textReducer.reduce(document, event),
			carets: this._caretReducer.reduce(document, event)
		};
	}	
}