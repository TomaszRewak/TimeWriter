import CaretCascadeNavigationService from "../../document-navigation/caret-cascade-navigation-service";

export default class InsertionEventCaretReducer {
	constructor() {
		this._caretCascadeNagigationService = new CaretCascadeNavigationService();
	}

	reduce(carets, position, length) {
		return carets.map(caret => this._reduceCaret(caret, position, length));
	}

	_reduceCaret(caret, position, length) {
		const begin = this._reduceCaretPosition(caret.begin, position, length);
		const end = this._reduceCaretPosition(caret.end, position, length);

		if (caret.begin === begin && caret.end === end)
			return caret;

		return { ...caret, begin, end };
	}

	_reduceCaretPosition(caret, position, length) {
		if (!this._isCaretAffected(caret, position))
			return caret;

		return {
			...caret,
			column: caret.column + length
		};
	}

	_isCaretAffected(caret, position) {
		return caret.line === position.line && caret.column >= position.column;
	}
}