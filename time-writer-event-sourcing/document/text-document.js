import EventStore from "./event-history/event-store";
import { sampleText } from "../samples/sample-text"

export default class TextDocument {
	constructor(history) {
		if (!history)
			history = [
				{
					event: {
						timestamp: Date.now()
					},
					state: {
						carets: [],
						text: sampleText
					}
				}
			];

		this._eventStore = new EventStore(history);
	}

	get history() {
		return this._eventStore.history;
	}

	get state() {
		return this._eventStore.state;
	}

	addEvent(event) {
		this._eventStore.add(event);

		console.dir(this.history);
	}

	updateTimestamp(event, timestamp) {
		return this._eventStore.updateTimestamp(event, timestamp);
	}
}