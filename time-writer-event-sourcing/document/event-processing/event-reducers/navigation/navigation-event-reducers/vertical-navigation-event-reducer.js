import TextNavigationService from "../../../../../services/text-navigation-service";

export default class VerticalNavigationEventReducer {
	constructor() {
		this.textNavigationService = new TextNavigationService();
	}

	reduce(document, event) {
		const text = document.text;

		return {
			...document,
			carets: document.carets.map(caret => this._reduceCaret(text, caret, event))
		};
	}

	_reduceCaret(text, caret, event) {
		if (caret.owner !== event.author)
			return caret;

		return this._reduceOwnedCaret(text, caret, event);
	}

	_reduceOwnedCaret(text, caret, event) {
		const caretCoordinates = this.textNavigationService.getCaretCoordinates(text, caret.endPosition);
		const newCaretCoordinates = this._reduceCaretCoordinates(caret, caretCoordinates, event);
		const newCaretPosition = this.textNavigationService.getCaretPosition(text, newCaretCoordinates);

		return {
			...caret,
			beginPosition: event.select ? caret.beginPosition : newCaretPosition,
			endPosition: newCaretPosition,
			lastOperation: 'navigation vertical',
			endColumn: newCaretCoordinates.column
		};
	}

	_reduceCaretCoordinates(caret, coordinates, event) {
		let column =
			caret.lastOperation !== 'navigation vertical'
				? coordinates.column
				: caret.endColumn;

		return {
			column: column,
			line: coordinates.line + this._getOffset(event)
		};
	}

	_getOffset(event) {
		if (event.direction === 'up')
			return -1;
		if (event.direction === 'down')
			return 1;
	}
}