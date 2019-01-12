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
		const endPosition = this._textNavigationService.clipPosition(event.position, document.text);

		return {
			...caret,
			beginPosition,
			endPosition,
			lastOperation: 'selection'
		};
	}
}