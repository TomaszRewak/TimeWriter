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
		switch (event.placement) {
			case 'position':
				return this._addCaretOnPosition(document, event);
			case 'all':
				return this._addCaretOnAll(document, event);
			case 'above':
				return this._addCaretsVertically(document, event, -1);
			case 'below':
				return this._addCaretsVertically(document, event, 1);
		}
	}

	_addCaretOnPosition(document, event) {
		const position = this._textNavigationService.clipPosition(event.position, document.text);

		return [
			...this._processOldCarets(document.carets, event),
			{
				owner: event.author,
				beginPosition: position,
				endPosition: position,
				lastOperation: 'creation'
			}
		];
	}

	_processOldCarets(carets, event) {
		if (event.preserveExisting)
			return carets;

		return carets.filter(caret => caret.owner !== event.author);
	}

	_addCaretOnAll(document, event) {
		return [
			...document.carets,
			{
				owner: event.author,
				beginPosition: 0,
				endPosition: document.text.length,
				lastOperation: 'creation'
			}
		];
	}

	_addCaretsVertically(document, event, direction) {
		const ownedCarets = document.carets.filter(caret => caret.owner === event.author);
		const newCarets = ownedCarets.map(caret => this._reduceCaretVertically(document, caret, direction));

		return [
			...document.carets,
			...newCarets
		]
	}

	_reduceCaretVertically(document, caret, direction) {		
		const caretBeginCoordinates = this._textNavigationService.getCaretCoordinates(document.text, caret.beginPosition);
		const newCaretBeginCoordinates = this._reduceCoordinatesVertically(caretBeginCoordinates, caret.beginColumn, caret.lastOperation, direction);

		const caretEndCoordinates = this._textNavigationService.getCaretCoordinates(document.text, caret.endPosition);
		const newCaretEndCoordinates = this._reduceCoordinatesVertically(caretEndCoordinates, caret.endColumn, caret.lastOperation, direction);

		return {
			...caret,
			beginPosition: this._textNavigationService.getCaretPosition(document.text, newCaretBeginCoordinates),
			endPosition: this._textNavigationService.getCaretPosition(document.text, newCaretEndCoordinates),
			beginColumn: newCaretBeginCoordinates.column,
			endColumn: newCaretEndCoordinates.column,
			lastOperation: 'creation vertical'
		}
	}

	_reduceCoordinatesVertically(coordinates, lastColumn, lastOperation, direction) {
		let column =
			lastOperation !== 'creation vertical'
				? coordinates.column
				: lastColumn;

		return {
			column: column,
			line: coordinates.line + direction
		};
	}
}