import EventReducer from "../event-processing/event-reducer";

export default class EventStoreState {
	constructor() {
		this._eventReducer = new EventReducer();
	}

	_getLastIndexWithState(chain, index) {
		while (!chain[index].state)
			index--;

		return index;
	}

	getState(chain, index) {
		let stateIndex = this._getLastIndexWithState(chain, index);
		let state = chain[stateIndex].state;

		while (stateIndex < index)
			state = this._eventReducer.reduce(state, chain[++stateIndex].event);

		return state;
	}

	updateCurrentState(chain) {
		let lastIndex = chain.length - 1;

		chain[lastIndex].state = this.getState(chain, lastIndex);
	}
}