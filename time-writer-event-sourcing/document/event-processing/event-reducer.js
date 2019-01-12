import NavigationEventReducer from "./event-reducers/navigation/navigation-event-reducer";
import InsertionEventReducer from "./event-reducers/insertion/insertion-event-reducer";
import DeletionEventReducer from "./event-reducers/deletion/deletion-event-reducer";
import CaretManagementEventReducer from "./event-reducers/caret-management/caret-management-event-reducer";
import PostprocessingReducer from "./event-reducers/postprocessing/postprocessing-redocer";

export default class EventReducer {
	constructor() {
		this.insertionEventReducer = new InsertionEventReducer();
		this.deletionEventReducer = new DeletionEventReducer();
		this.navigationEventReducer = new NavigationEventReducer();
		this.caretManagementEventReducer = new CaretManagementEventReducer();
		
		this.postprocessingReducer = new PostprocessingReducer();
	}

	_getReducer(event) {
		switch (event.type) {
			case 'insert':
				return this.insertionEventReducer;
			case 'delete':
				return this.deletionEventReducer;
			case 'navigate':
				return this.navigationEventReducer;
			case 'manage-carets':
				return this.caretManagementEventReducer;
			default:
				throw new Error('Event not recognized');
		}
	}

	reduce(document, event) {
		const reducer = this._getReducer(event);

		return this.postprocessingReducer.reduce(reducer.reduce(document, event));
	}
}