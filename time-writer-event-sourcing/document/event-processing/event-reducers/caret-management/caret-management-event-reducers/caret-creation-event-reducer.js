import TextNavigationService from "../../../../../services/text-navigation-service";

export default class CaretCreationEventReducer {
	constructor() {
		this._textNavigationService = new TextNavigationService();
	}

	reduce(document, event) {
		return {
			...document,
			carets: this._reduceCarets(document, event)
		}
	}

	_reduceCarets(document, event) {
		const position = this._textNavigationService.clipPosition(event.position, document.text);

		return [
			...document.carets,
			{
				owner: event.author,
				beginPosition: position,
				endPosition: position,
				lastOperation: 'creation'
			}
		];
	}
}