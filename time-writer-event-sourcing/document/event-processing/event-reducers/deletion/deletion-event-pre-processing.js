export default class DeletionEventPreProcessor {
	prepareEvent(document, event, caret) {
		const range = this._prepareRange(event, caret);

		return {
			...event,
			beginPosition: this._clipPosition(document, range.beginPosition),
			endPosition: this._clipPosition(document, range.endPosition),
			caret
		}
	}

	_prepareRange(event, caret) {
		if (caret.beginPosition != caret.endPosition)
			return {
				beginPosition: event.caret.beginPosition,
				endPosition: event.caret.endPosition
			}
		if (event.mode == 'backward')
			return {
				beginPosition: caret.beginPosition - 1,
				endPosition: caret.beginPosition
			}
		if (event.mode == 'forward')
			return {
				beginPosition: caret.beginPosition,
				endPosition: caret.beginPosition + 1
			}
	}

	_clipPosition(document, position) {
		return Math.max(0, Math.min(document.text.length, position));
	}
}