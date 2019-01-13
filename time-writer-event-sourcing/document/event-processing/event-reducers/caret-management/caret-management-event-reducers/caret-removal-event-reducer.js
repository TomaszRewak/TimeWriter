export default class CaretRemovalEventReducer {
	reduce(document, event) {
		return {
			...document,
			carets: this._reduceCarets(document.carets, event)
		}
	}

	_reduceCarets(carets, event) {
		return [
			...this._getOtherUsersCarets(carets, event),
			...this._getNewCarets(carets, event)
		];
	}

	_getOtherUsersCarets(carets, event) {
		return carets
			.filter(caret => caret.owner != event.author);
	}

	_getNewCarets(carets, event) {
		if (!event.leaveFirst)
			return [];

		const ownCarets = carets
			.filter(caret => caret.owner === event.author);

		if (!ownCarets.length)
			return [];

		const position = Math.min(...ownCarets.map(caret => caret.endPosition));

		return [{
			beginPosition: position,
			endPosition: position,
			lastOperation: 'creation'
		}];
	}
}