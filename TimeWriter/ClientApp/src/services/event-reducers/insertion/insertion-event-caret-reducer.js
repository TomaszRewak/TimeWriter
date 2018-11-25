import CaretCascadeNavigationService from "../../document-navigation/caret-cascade-navigation-service";

export default class InsertionEventCaretReducer {
	constructor() {
		this._caretCascadeNagigationService = new CaretCascadeNavigationService();
	}

	reduce(carets, begin, by) {
		return carets.map(caret => this._reduceCaret(caret, begin, by));
	}

	_reduceCaret(caret, start, by) {
		const newBegin = this._reducePosition(caret.begin, start, by);
		const newEnd = this._reducePosition(caret.end, start, by);

		if (caret.begin === newBegin && caret.end === newEnd)
			return caret;

		return {
			...caret,
			begin: newBegin,
			end: newEnd
		};
	}

	_reducePosition(position, start, by) {
		if (this._comparePositions(position, start) < 0)
			return position;

		return {
			...position,
			column: position.column + by
		};
	}

	_comparePositions(positionA, positionB) {
		const lineDiff = Math.sign(positionA.line - positionB.line);
		const columnDiff = Math.sign(positionA.column - positionB.column);

		return Math.sign(lineDiff * 2 + columnDiff);
	}
}