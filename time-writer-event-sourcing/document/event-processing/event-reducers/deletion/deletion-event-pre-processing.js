export default class DeletionEventPreProcessor {
	prepareEvent(document, event, caret) {
		const pointA = caret.beginPosition;
		const pointB = this._getRangeEnd(event, caret);

		const begin = Math.min(pointA, pointB);
		const end = Math.max(pointA, pointB);

		return {
			...event,
			beginPosition: this._clipPosition(document, begin),
			endPosition: this._clipPosition(document, end),
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