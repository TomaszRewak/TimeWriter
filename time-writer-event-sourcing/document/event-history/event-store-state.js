import EventReducer from "../event-processing/event-reducer";

export default class EventStoreState {
	constructor() {
		this._eventReducer = new EventReducer();
	}

	_reduceHistoryOffset(offset, event) {
		if (event.type === 'undo')
			return offset + 1;
		if (event.type === 'redo')
			return offset - 1;

		return offset - 1;
	}

	_isHistoryEvent(event) {
		return event.type == 'undo' || event.type === 'redo';
	}

	_getPreviousStateIndex(chain, index) {
		if (!this._isHistoryEvent(chain[index].event))
			return index + 1;

		let historyOffset = 0;

		do {
			historyOffset = this._reduceHistoryOffset(historyOffset, chain[index].event);
			index++;
		}
		while (historyOffset > 0 || this._isHistoryEvent(chain[index].event));

		if (historyOffset !== 0)
			throw new Error();

		return index;
	}

	_reduceState(state, event) {
		if (this._isHistoryEvent(event))
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
		chain[0].state = this._getState(chain, 0);
	}
}