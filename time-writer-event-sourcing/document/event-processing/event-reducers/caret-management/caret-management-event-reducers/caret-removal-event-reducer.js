export default class CaretRemovalEventReducer {
	reduce(document, event) {
		return {
			...document,
			carets: this._reduceCarets(document.carets, event)
		}
	}

	_reduceCarets(carets, event) {
		return carets.filter(caret => caret.owner != event.author);
	}
}