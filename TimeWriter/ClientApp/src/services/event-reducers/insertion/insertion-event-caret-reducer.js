import CaretCascadeNavigationService from "../../document-navigation/caret-cascade-navigation-service";

export default class InsertionEventCaretReducer {
	constructor() {
		this._caretCascadeNagigationService = new CaretCascadeNavigationService();
	}

	reduceCarets(document, event) {
		return this._caretCascadeNagigationService.moveAuthorsCarets(
			document.carets,
			event.author,
			event.text.length);
	}
}