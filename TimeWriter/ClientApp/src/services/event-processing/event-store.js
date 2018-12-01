export default class EventStore {
	constructor() {
		this.eventChain = null;
	}

	addEvent(event) {
		this.eventChain = {
			event,
			next: this.eventChain
		};
	}

	popEvent() {
		const lastEvent = this.lastEvent();
		this.removeLastEvent();
		return lastEvent;
	}

	removeLastEvent() {
		this.eventChain = this.eventChain.next;
	}

	hasEvents() {
		return this.eventChain !== null;
	}

	lastEvent() {
		return this.eventChain.event;
	}
}