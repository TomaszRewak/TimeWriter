import InsertionEventTextReducer from "./insertion-event-text-reducer";
import InsertionEventCaretReducer from "./insertion-event-caret-reducer";
import InsertionEventPreProcessor from "./insertion-event-pre-processor";

export default class InsertionEventReducer {
	constructor() {
		this._eventPreProcessor = new InsertionEventPreProcessor();

		this._textReducer = new InsertionEventTextReducer();
		this._caretReducer = new InsertionEventCaretReducer();
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