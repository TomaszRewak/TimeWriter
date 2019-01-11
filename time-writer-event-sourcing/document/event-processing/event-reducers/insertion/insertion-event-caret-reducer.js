export default class InsertionEventCaretReducer {
	reduce(document, event) {
		return document.carets.map(caret => this._reduceCaret(caret, event));
	}

	_reduceCaret(caret, event) {
		return {
			...caret,
			beginPosition: this._reducePosition(caret.beginPosition, event),
			endPosition: this._reducePosition(caret.endPosition, event),
			lastOperation: 'insertion'
		};
	}

	_reducePosition(position, event) {
		if (position < event.beginPosition)
			return position;
		if (position <= event.endPosition)
			return event.beginPosition + event.text.length;
		return position - (event.endPosition - event.beginPosition) + event.text.length;
	}
}