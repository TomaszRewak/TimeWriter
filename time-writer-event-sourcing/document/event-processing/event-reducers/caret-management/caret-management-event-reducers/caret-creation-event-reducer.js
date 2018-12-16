export default class CaretCreationEventReducer {
	reduce(document, event) {
		return {
			...document,
			carets: this._reduceCarets(document.carets, event)
		}
	}

	_reduceCarets(carets, event) {
		return [
			...carets,
			{
				owner: event.author,
				position: 0
			}
		];
	}
}