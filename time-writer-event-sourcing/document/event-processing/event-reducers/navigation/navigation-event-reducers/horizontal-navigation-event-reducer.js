import TextNavigationService from "../../../../../services/text-navigation-service";

export default class HorizontalNavigationEventReducer {
	constructor() {
		this._textNavigationService = new TextNavigationService();
	}

	reduce(document, event) {
		return {
			...document,
			carets: document.carets.map(caret => this._reduceCaret(document.text, event, caret))
		};
	}

	_reduceCaret(text, event, caret) {
		if (caret.owner !== event.author)
			return caret;

		const newPosition = this._textNavigationService.clipPosition(
			this._getNewPosition(text, event, caret),
			text
		);

		return {
			...caret,
			beginPosition: newPosition,
			endPosition: newPosition,
			lastOperation: 'navigation horizontal'
		};
	}

	_getNewPosition(text, event, caret) {
		if (event.direction === 'left' && event.fast)
			return this._textNavigationService.getPreviousFastPosition(text, caret.endPosition);
		if (event.direction === 'left')
			return caret.endPosition - 1;
		if (event.direction === 'right' && event.fast)
			return this._textNavigationService.getNextFastPosition(text, caret.endPosition);
		if (event.direction === 'right')
			return caret.endPosition + 1;
	}
}