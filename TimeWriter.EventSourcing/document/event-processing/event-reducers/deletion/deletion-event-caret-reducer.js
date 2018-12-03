export default class DeletionEventCaretReducer {
	reduce(document, event) {
		switch (event.mode) {
			case 'backward':
				return document.carets.map(caret => this._reduceCaretBackward(caret, event));
			case 'forward':
				return document.carets.map(caret => this._reduceCaretForward(caret, event));
		}
	}

	_reduceCaretBackward(caret, event) {
		if (caret.position < event.caret.position)
			return caret;

		return {
			...caret,
			position: caret.position - event.length
		};
	}

	_reduceCaretForward(caret, event) {
		if (caret.position <= event.caret.position)
			return caret;

		return {
			...caret,
			position: caret.position -event.length
		};
	}
}