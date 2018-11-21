import { EventStore } from "./event-store";
import EventReducer from "./event-reducer";
import { shakspeareSampleText } from "../samples/sample-text";

export default class TextDocument {
	constructor() {
		this._documentState = {
			carets: [
				{ owner: 1, position: 1 },
				{ owner: 1, position: 20 },
				{ owner: 2, position: 50 }
			],
			text: shakspeareSampleText.repeat(30)
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