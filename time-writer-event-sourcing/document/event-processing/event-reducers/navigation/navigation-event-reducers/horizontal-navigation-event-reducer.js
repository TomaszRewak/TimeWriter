export default class HorizontalNavigationEventReducer {
	reduce(document, event) {
		return {
			...document,
			carets: document.carets.map(caret => this._reduceCaret(document, event, caret))
		};
	}

	_reduceCaret(document, event, caret) {
		if (caret.owner !== event.author)
			return caret;

		const newPosition = this._clipPosition(document, caret.beginPosition + event.offset);

		return {
			...caret,
			beginPosition: newPosition,
			endPosition: newPosition,
			lastOperation: 'navigation horizontal'
		};
	}

	_clipPosition(document, position) {
		return Math.max(0, Math.min(document.text.length, position));
	}
}