export default class PostprocessingReducer {
	reduce(document) {
		return {
			...document,
			carets: this._removeDuplicateCarets(document.carets)
		};
	}

	_removeDuplicateCarets(carets) {
		return carets.filter((caretA, index) => index === carets.findIndex(caretB => this._compareCarets(caretA, caretB)));
	}

	_compareCarets(caretA, caretB) {
		return (
			caretA.owner === caretB.owner &&
			Math.min(caretA.beginPosition, caretA.endPosition) === Math.min(caretB.beginPosition, caretB.endPosition) &&
			Math.max(caretA.beginPosition, caretA.endPosition) === Math.max(caretB.beginPosition, caretB.endPosition)
		)
	}
}