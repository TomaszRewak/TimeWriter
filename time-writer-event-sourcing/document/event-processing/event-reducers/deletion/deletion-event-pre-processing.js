export default class DeletionEventPreProcessor {
	prepareEvent(document, event, caret) {
		const rangeBegin = caret.beginPosition;
		const rangeEnd = this._getRangeEnd(event, caret);

		return {
			...event,
			beginPosition: this._clipPosition(document, Math.min(rangeBegin, rangeEnd)),
			endPosition: this._clipPosition(document, Math.max(rangeBegin, rangeEnd)),
			caret
		}
	}

	_getRangeEnd(event, caret) {
		if (caret.beginPosition != caret.endPosition)
			return caret.endPosition;
		if (event.mode == 'backward')
			return caret.beginPosition - 1;
		if (event.mode == 'forward')
			return caret.beginPosition + 1;
	}

	_clipPosition(document, position) {
		return Math.max(0, Math.min(document.text.length, position));
	}
}