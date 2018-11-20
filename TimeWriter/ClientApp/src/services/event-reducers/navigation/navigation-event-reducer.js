import CaretUniformNavigationService from "../../document-navigation/caret-uniform-navigation-service";

export default class NavigationEventReducer {
	constructor() {
		this._caretUniformNavigationService = new CaretUniformNavigationService();
	}

	reduce(document, event) {
		const reducedCarets = this._caretUniformNavigationService.moveAuthorsCarets(
			document.carets,
			event.author,
			event.offset);

		return {
			...document,
			carets: reducedCarets
		};
	}
}