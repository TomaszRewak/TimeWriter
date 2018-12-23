export default class InsertionEventCaretReducer {
	reduce(document, event) {
		return document.carets.map(caret => this._reduceCaret(caret, event));
	}

	_reduceCaret(caret, event) {
		if (caret.position < event.caret.position)
			return caret;

		return {
			...caret,
			position: caret.position + event.text.length,
			lastOperation: 'insertion'
		};
	}
}