import TextNavigationService from "../../../../../services/text-navigation-service";

export default class SelectionEventReducer {
	constructor() {
		this._textNavigationService = new TextNavigationService();
	}

	reduce(document, event) {
		return {
			...document,
			carets: document.carets.map(caret => this._reduceCaret(document, event, caret))
		}
	}

	_reduceCaret(document, event, caret) {
		if (caret.owner != event.author)
			return caret;

		let beginPosition = caret.beginPosition;
		let endPosition = this._textNavigationService.getCaretPosition(document.text, event.coordinates);

		return {
			...caret,
			beginPosition,
			endPosition,
			lastOperation: 'selection'
		};
	}
}