import EventReducer from "../event-processing/event-reducer";
import EventStoreRepair from "./event-store-repair";
import EventStoreState from "./event-store-state";
import EventStoreCleanup from "./event-store-cleanup";

export default class EventStore {
	constructor(history) {
		this._chain = history;

		this._eventReducer = new EventReducer();
		this._eventStoreRepair = new EventStoreRepair();
		this._eventStoreState = new EventStoreState();
		this._eventStoreCleanup = new EventStoreCleanup();
	}

	_find(event) {
		for (let i = this._chain.length - 1; i >= 0; i--)
			if (this._chain[i].event === event)
				return i;

		throw new Error('Event not found');
	}

	_assertCanAdd(event) {
		if (event.type === 'revert') {
			let revertEvents = this._chain
				.filter(node => node.event && node.event.type === 'revert')
				.length;

			return revertEvents + 1 < this._chain.length;
		}

		return true;
	}

	add(event) {
		this._assertCanAdd(event);

		this._chain.push({
			event,
			state: null
		});

		this._eventStoreRepair.fix(this._chain);
		this._eventStoreCleanup.cleanup(this._chain);
		this._eventStoreState.updateCurrentState(this._chain);
	}

	get history() {
		return this._chain;
	}

	get state() {
		return this._chain[this._chain.length - 1].state;
	}
}