import CaretCreationEventReducer from './caret-management-event-reducers/caret-creation-event-reducer';
import CaretRemovalEventReducer from './caret-management-event-reducers/caret-removal-event-reducer';
import SelectionEventReducer from './caret-management-event-reducers/selection-event-reducer';

export default class CaretManagementEventReducer {
	constructor() {
		this.caretCreationEventReducer = new CaretCreationEventReducer();
		this.caretRemovalEventReducer = new CaretRemovalEventReducer();
		this.selectionEventReducer = new SelectionEventReducer();
	}

	reduce(document, event) {
		const reducer = this._getReducer(event);

		return reducer.reduce(document, event);
	}

	_getReducer(event) {
		switch (event.operation) {
			case 'add-caret':
				return this.caretCreationEventReducer;
			case 'remove-carets':
				return this.caretRemovalEventReducer;
			case 'select':
				return this.selectionEventReducer;
		}
	}
}