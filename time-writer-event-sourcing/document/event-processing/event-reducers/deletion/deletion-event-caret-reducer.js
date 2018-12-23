export default class DeletionEventCaretReducer {
	reduce(document, event) {
		switch (event.mode) {
			case 'backward':
				return document.carets.map(caret => this._reduceCaretBackward(document, caret, event));
			case 'forward':
				return document.carets.map(caret => this._reduceCaretForward(document, caret, event));
		}
	}

	_reduceCaretBackward(document, caret, event) {
		if (caret.position < event.caret.position)
			return caret;

		return {
			...caret,
			position: Math.max(0, caret.position - event.length),
			lastOperation: 'deletion backward'
		};
	}

	_reduceCaretForward(document, caret, event) {
		if (caret.position <= event.caret.position)
			return caret;

		return {
			...caret,
			position: Math.min(document.text.length - event.length, caret.position - event.length),
			lastOperation: 'deletion forward'
		};
	}
}