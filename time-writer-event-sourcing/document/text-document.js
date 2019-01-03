import EventStore from "./event-history/event-store";

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
						text: ''
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
}