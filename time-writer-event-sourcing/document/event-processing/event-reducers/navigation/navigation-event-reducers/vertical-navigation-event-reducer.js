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
		const caretCoordinates = this.textNavigationService.getCaretCoordinates(text, caret.position, event.configuration);
		const newCaretCoordinates = this._reduceCaretCoordinatesBy(caretCoordinates,event.offset );
		const newCaretPosition = this.textNavigationService.getCaretPosition(text, newCaretCoordinates, event.configuration);

		return {
			...caret,
			position: newCaretPosition
		};
	}

	_reduceCaretCoordinatesBy(coordinates, offset)
	{
		return {
			column: coordinates.column,
			line: coordinates.line + offset
		};
	}
}