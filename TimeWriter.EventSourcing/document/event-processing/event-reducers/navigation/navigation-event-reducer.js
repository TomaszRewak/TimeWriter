export default class NavigationEventReducer {
	reduce(document, event) {
		return {
			...document,
			carets: document.carets.map(caret => this._reduceCaret(caret, event))
		};
	}

	_reduceCaret(caret, event) {
		if (caret.owner !== event.author)
			return caret;

		return {
			...caret,
			position: caret.position + event.offset
		};
	}
}