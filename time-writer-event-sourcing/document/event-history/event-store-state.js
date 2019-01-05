import EventReducer from "../event-processing/event-reducer";

export default class EventStoreState {
	constructor() {
		this._eventReducer = new EventReducer();
	}

	_getPreviousStateIndex(chain, index) {
		if (chain[index].event.type === 'revert')
			return index - 2;
		else
			return index - 1;
	}

	_getState(chain, index) {
		if (chain[index].state)
			return chain[index].state;

		const previousStateIndex = this._getPreviousStateIndex(chain, index);
		const previousState = chain[previousStateIndex].state;

		return this._eventReducer.reduce(previousState, chain[index].event);
	}

	updateCurrentState(chain) {
		let lastIndex = chain.length - 1;

		chain[lastIndex].state = this._getState(chain, lastIndex);
	}
}