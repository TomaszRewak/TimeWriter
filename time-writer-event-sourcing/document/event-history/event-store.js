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

	_reduceChain(event) {
		return [
			{
				event,
				state: null
			},
			...this._chain			
		];
	}

	add(event) {
		const newChain = this._reduceChain(event)

		try {
			this._eventStoreRepair.fix(newChain);
			this._eventStoreState.updateCurrentState(newChain);
			this._eventStoreCleanup.cleanup(newChain);
		}
		catch(e) {
			console.dir(e);
			return false;
		}

		this._chain = newChain;

		return true;
	}

	get history() {
		return this._chain;
	}

	get state() {
		return this._chain[0].state;
	}
}