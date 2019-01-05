import EventReducer from "../event-processing/event-reducer";

export default class EventStoreState {
	constructor() {
		this._eventReducer = new EventReducer();
	}

	_getPreviousStateIndex(chain, index) {
		let revertions = 0;

		do {
			if (chain[index].event.type === 'revert')
				revertions++;
			else
				revertions--;

			index--;
		}
		while (revertions > 0);


		return index;
	}

	_reduceState(state, event) {
		if (event.type === 'revert')
			return state;
		else
			return this._eventReducer.reduce(state, event);
	}

	_getState(chain, index) {
		if (chain[index].state)
			return chain[index].state;

		const previousStateIndex = this._getPreviousStateIndex(chain, index);
		const previousState = this._getState(chain, previousStateIndex);

		return this._reduceState(previousState, chain[index].event);
	}

	updateCurrentState(chain) {
		let lastIndex = chain.length - 1;

		chain[lastIndex].state = this._getState(chain, lastIndex);
	}
}