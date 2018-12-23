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
		const caretCoordinates = this.textNavigationService.getCaretCoordinates(text, caret.position);
		const newCaretCoordinates = this._reduceCaretCoordinatesBy(caret, caretCoordinates, event.offset);
		const newCaretPosition = this.textNavigationService.getCaretPosition(text, newCaretCoordinates);

		return {
			...caret,
			position: newCaretPosition,
			lastOperation: 'navigation vertical',
			verticalNavigationColumn: newCaretCoordinates.column
		};
	}

	_reduceCaretCoordinatesBy(caret, coordinates, offset) {
		let column =
			caret.lastOperation !== 'navigation vertical'
				? coordinates.column
				: caret.verticalNavigationColumn;

		return {
			column: column,
			line: coordinates.line + offset
		};
	}
}