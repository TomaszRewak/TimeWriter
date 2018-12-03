import VerticalNavigationEventReducer from './navigation-event-reducers/vertical-navigation-event-reducer';
import HorizontalNavigationEventReducer from './navigation-event-reducers/horizontal-navigation-event-reducer';

export default class NavigationEventReducer {
	constructor() {
		this.verticalNavigationEventReducer = new VerticalNavigationEventReducer();
		this.horizontalNavigationEventReducer = new HorizontalNavigationEventReducer();
	}

	reduce(document, event) {
		const reducer = this._getReducer(event);

		return reducer.reduce(document, event);
	}

	_getReducer(event) {
		switch (event.mode) {
			case 'move-horizontally':
				return this.horizontalNavigationEventReducer;
			case 'move-vertically':
				return this.verticalNavigationEventReducer;
		}
	}
}