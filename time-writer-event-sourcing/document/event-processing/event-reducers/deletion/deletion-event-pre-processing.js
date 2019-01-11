import TextNavigationService from "../../../../services/text-navigation-service";

export default class DeletionEventPreProcessor {
	constructor() {
		this._textNavigationService = new TextNavigationService();
	}

	prepareEvent(document, event, caret) {
		const pointA = caret.beginPosition;
		const pointB = this._getRangeEnd(document, event, caret);

		const begin = Math.min(pointA, pointB);
		const end = Math.max(pointA, pointB);

		return {
			...event,
			beginPosition: this._clipPosition(document, begin),
			endPosition: this._clipPosition(document, end),
			caret
		}
	}

	_getRangeEnd(document, event, caret) {
		if (caret.beginPosition != caret.endPosition)
			return caret.endPosition;
		if (event.mode == 'backward' && event.fast)
			return this._textNavigationService.getPreviousFastPosition(document.text, caret.endPosition)
		if (event.mode == 'backward')
			return caret.beginPosition - 1;
		if (event.mode == 'forward' && event.fast)
			return this._textNavigationService.getNextFastPosition(document.text, caret.endPosition)
		if (event.mode == 'forward')
			return caret.beginPosition + 1;
	}

	_clipPosition(document, position) {
		return Math.max(0, Math.min(document.text.length, position));
	}
}