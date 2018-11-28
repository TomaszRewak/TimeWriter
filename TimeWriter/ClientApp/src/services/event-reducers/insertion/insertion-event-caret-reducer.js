import CaretCascadeNavigationService from "../../document-navigation/caret-cascade-navigation-service";

export default class InsertionEventCaretReducer {
	constructor() {
		this._caretCascadeNagigationService = new CaretCascadeNavigationService();
	}

	reduce(document, event) {
		return document.carets.map(caret => this._reduceCaret(caret, event));
	}

	_reduceCaret(caret, event) {
		if (caret.position < event.caret.position)
			return caret;

		return {
			...caret,
			position: caret.position + event.text.length
		};
	}
}