import NavigationEventReducer from "./event-reducers/navigation/navigation-event-reducer";
import InsertionEventReducer from "./event-reducers/insertion/insertion-event-reducer";
import DeletionEventReducer from "./event-reducers/deletion/deletion-event-reducer";

export default class EventReducer {
	constructor() {
		this.insertionEventReducer = new InsertionEventReducer();
		this.deletionEventReducer = new DeletionEventReducer();
		this.navigationEventReducer = new NavigationEventReducer();
	}

	getReducer(event) {
		switch (event.type) {
			case 'insert':
				return this.insertionEventReducer;
			case 'delete':
				return this.deletionEventReducer;
			case 'navigate':
				return this.navigationEventReducer;
			default:
				throw new Error('Event not recognized');
		}
	}

	reduce(document, event) {
		const reducer = this.getReducer(event);

		return reducer.reduce(document, event);
	}
}