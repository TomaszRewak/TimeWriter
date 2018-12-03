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
		const caretPosition = this.textNavigationService.getCaretPosition(text, {
			column: caretCoordinates.column,
			line: caretCoordinates.line + event.offset
		});

		return {
			...caret,
			position: caretPosition
		};
	}
}