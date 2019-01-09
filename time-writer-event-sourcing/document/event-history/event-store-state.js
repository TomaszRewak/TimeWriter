import EventReducer from "../event-processing/event-reducer";

export default class EventStoreState {
	constructor() {
		this._eventReducer = new EventReducer();
	}

	updateCurrentState(chain) {
		chain[0].state = this._getState(chain, 0);
	}

	_getState(chain, index) {
		let undoLevels = new Map();
		let events = [];

		while (undoLevels.size || !chain[index].state) {
			const event = chain[index].event;

			if (!this._isHistoryEvent(event) && !this._shouldUndo(undoLevels, event))
				events.push(event);

			this._updateUndoLevel(undoLevels, event);

			index++;
		}

		return events.reduceRight((state, event) => this._reduceState(state, event), chain[index].state)
	}

	_updateUndoLevel(undoLevels, event) {
		const key = this._getKey(event.author);

		if (!undoLevels.has(key))
			undoLevels.set(key, 0);

		let level = undoLevels.get(key);

		if (event.type === 'redo')
			level--;
		else if (event.type === 'undo')
			level++;
		else if (level > 0)
			level--;

		if (level === 0)
			undoLevels.delete(key);
		else
			undoLevels.set(key, level);
	}

	_shouldUndo(undoLevels, event) {
		const key = this._getKey(event.author);

		return undoLevels.has(key);
	}

	_getKey(user) {
		return user ? user : null;
	}

	_reduceState(state, event) {
		if (this._isHistoryEvent(event))
			return state;
		else
			return this._eventReducer.reduce(state, event);
	}

	_isHistoryEvent(event) {
		return event.type == 'undo' || event.type === 'redo';
	}
}