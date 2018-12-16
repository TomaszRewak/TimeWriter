export default class HorizontalNavigationEventReducer {
	reduce(document, event) {
		const maxPosition = document.text.length;

		return {
			...document,
			carets: document.carets.map(caret => this._reduceCaret(caret, maxPosition, event))
		};
	}

	_reduceCaret(caret, maxPosition, event) {
		if (caret.owner !== event.author)
			return caret;

		return {
			...caret,
			position: Math.max(0, Math.min(maxPosition, caret.position + event.offset))
		};
	}
}