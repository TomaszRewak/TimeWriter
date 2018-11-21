export default class CaretReducer {
	reduceCaret(caret, offset) {
		if (offset === 0)
			return caret;

		return {
			...caret,
			position: caret.position + offset
		};
	}

	reduceCarets(carets, by) {
		let movedCarets = this._moveCarets(carets, by);

		return this._organizeCarets(movedCarets);
	}

	_moveCarets(carets, by) {
		if (Array.isArray(by))
			return this._moveCaretsByOffsets(carets, by);
		else
			return this._moveCaretsByOffset(carets, by);
	}

	_moveCaretsByOffset(carets, offset) {
		return carets.map(
			(caret, index) => this.reduceCaret(caret, offset)
		);
	}

	_moveCaretsByOffsets(carets, offsets) {
		return carets.map(
			(caret, index) => this.reduceCaret(caret, offsets[index])
		);
	}

	_organizeCarets(carets) {
		const sortedCarets = this._sortCarets(carets);
		const groupedCarets = this._groupSortedCarets(sortedCarets);

		return groupedCarets;
	}

	_sortCarets(carets) {
		return carets.sort(this._compareCarets);
	}

	_groupSortedCarets(carets) {
		const groupedCarets = [];

		for (let i = 0; i < carets.length; i++) {
			if (i === 0 || this._compareCarets(carets[i - 1], carets[i]) !== 0)
				groupedCarets.push(carets[i]);
		}

		return groupedCarets;
	}

	_compareCarets(caretA, caretB) {
		return caretA.position !== caretB.position
			? caretA.position - caretB.position
			: caretA.owner - caretB.owner;
	}
}