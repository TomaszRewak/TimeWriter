import { EventStore } from "./event-store";
import EventReducer from "./event-reducer";
import { shakspeareSampleText } from "../samples/sample-text";

export default class TextDocument {
	constructor() {
		this._documentState = {
			carets: [
				{ id: 0, owner: 1, begin: { line: 2, column: 1 }, end: { line: 0, column: 1 } },
				{ id: 1, owner: 1, begin: { line: 2, column: 10 }, end: { line: 0, column: 10 } },
				{ id: 2, owner: 2, begin: { line: 2, column: 5 }, end: { line: 2, column: 7 } },
				{ id: 2, owner: 2, begin: { line: 4, column: 5 }, end: { line: 2, column: 7 } }
			],
			lines: shakspeareSampleText.repeat(10).split('\n').map((line, index) => ({
				id: index,
				text: line
			}))
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