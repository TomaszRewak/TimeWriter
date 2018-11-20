import CaretReducer from "./caret-reducer";

export default class CaretUniformNavigationService {
	constructor() {
		this._caretReducer = new CaretReducer();
	}

	moveAuthorsCarets(carets, author, offset) {
		const offsets = this._calculateCaretOffsets(carets, author, offset);
		const movedCarets = this._caretReducer.reduceCarets(carets, offsets);

		return movedCarets;
	}

	_calculateCaretOffsets(carets, author, offset) {
		return carets
			.map(caret => this._calculateCaretOffset(caret, author, offset));
	}

	_calculateCaretOffset(caret, author, offset) {
		if (caret.owner === author)
			return offset;
		else
			return 0;
	}
}