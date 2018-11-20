import CaretReducer from "./caret-reducer";

export default class CaretCascadeNavigationService {
	constructor() {
		this._caretReducer = new CaretReducer();
	}

	moveAuthorsCarets(carets, author, offset) {
		const offsets = this._calculateGlobalCaretOffsets(carets, author, offset);
		const movedCarets = this._caretReducer.reduceCarets(carets, offsets);

		return movedCarets;
	}

	_calculateGlobalCaretOffsets(carets, author, offset) {
		let offsets = this._calculateLocalCaretOffsets(carets, author, offset);

		for (let i = 1; i < offsets.length; i++)
			offsets[i] += offsets[i - 1];

		return offsets;
	}

	_calculateLocalCaretOffsets(carets, author, offset) {
		return carets
			.map(caret => this._calculateLocalCaretOffset(caret, author, offset));
	}

	_calculateLocalCaretOffset(caret, author, offset) {
		if (caret.owner === author)
			return offset;
		else
			return 0;
	}
}