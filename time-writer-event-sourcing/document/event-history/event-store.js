import EventReducer from "../event-processing/event-reducer";
import EventStoreRepair from "./event-store-repair";
import EventStoreState from "./event-store-state";
import EventStoreCleanup from "./event-store-cleanup";
import EventStoreValidation from "./event-store-validation";
import EventStoreRetrospector from "./event-store-retrospector";
import EventStoreChainReducer from "./event-store-chain-reducer";

export default class EventStore {
	constructor(history) {
		this._chain = history;

		this._eventReducer = new EventReducer();
		this._eventStoreChainReducer = new EventStoreChainReducer();
		this._eventStoreRepair = new EventStoreRepair();
		this._eventStoreState = new EventStoreState();
		this._eventStoreCleanup = new EventStoreCleanup();
		this._eventStoreValidation = new EventStoreValidation();
		this._eventStoreRetrospector = new EventStoreRetrospector();
	}

	add(event) {
		try {
			const newChain = this._eventStoreChainReducer.addEvent(this._chain, event);

			this._eventStoreRepair.fix(newChain);
			this._eventStoreState.updateCurrentState(newChain);
			this._eventStoreCleanup.cleanup(newChain);
			this._eventStoreValidation.validate(newChain);

			this._chain = newChain;
		}
		catch (e) {
			console.dir(e);
			return false;
		}

		return true;
	}

	updateTimestamp(event, timestamp) {
		try {
			if (this._eventStoreRetrospector.tryUpdateTimestamp(this._chain, event, timestamp))
				return true;

			console.log('Updating chain');

			this._chain = this._eventStoreChainReducer.removeEvent(this._chain, event);

			return this.add({
				...event,
				timestamp
			});
		}
		catch (e) {
			console.dir(e);
			return false;
		}
	}

	get history() {
		return this._chain;
	}

	get state() {
		return this._chain[0].state;
	}
}