export default class DeletionEventCaretReducer {
	reduce(document, event) {
		return document.carets.map(caret => this._reduceCaret(caret, event));
	}

	_reduceCaret(caret, event) {
		return {
			...caret,
			beginPosition: this._reducePosition(caret.beginPosition, event),
			endPosition: this._reducePosition(caret.endPosition, event),
			lastOperation: 'deletion'
		};
	}

	_reducePosition(position, event) {
		if (position <= event.beginPosition)
			return position;
		if (position <= event.endPosition)
			return event.beginPosition;
		return position - (event.endPosition - event.beginPosition);
	}
}