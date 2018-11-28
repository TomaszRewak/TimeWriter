import { EventStore } from "./event-store";
import EventReducer from "./event-reducer";
import { shakspeareSampleText } from "../samples/sample-text";

export default class TextDocument {
	constructor() {
		this._documentState = {
			carets: [
				{ id: 0, owner: 1, position: 20, length: 0 },
				{ id: 1, owner: 1, position: 40, length: 0 },
				{ id: 2, owner: 2, position: 30, length: 0 },
				{ id: 2, owner: 2, position: 120, length: 0 }
			],
			text: shakspeareSampleText.repeat(10)
		};

		this._eventStore = new EventStore();
		this._eventReducer = new EventReducer();
	}

	get state() {
		return this._documentState;
	}

	addEvent(event) {
		if (this._requiresReversal(event))
			this._undermineLastEvent(event);
		else
			this._applyEvent(event);
	}

	_requiresReversal(event) {
		return (
			this._eventStore.hasEvents()
			&&
			this._eventStore.lastEvent().timeStamp > event.timeStamp
		);
	}

	_undermineLastEvent(event) {
		const lastEvent = this._eventStore.popEvent();

		this.addEvent(event);
		this.addEvent(lastEvent);
	}

	_applyEvent(event) {
		this._documentState = this._eventReducer.reduce(this._documentState, event);
	}
}