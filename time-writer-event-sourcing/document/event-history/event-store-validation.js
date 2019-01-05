export default class EventStoreValidation {
	_countRevertEvents(chain) {
		return chain
			.filter(node => node.event.type === 'revert')
			.length;
	}

	_canAddRevertEvent(chain, timestamp) {
		let revertEventsNumber = this._countRevertEvents(chain, timestamp);
		return revertEventsNumber + 1 < chain.length / 2;
	}

	canAddEvent(chain, event) {
		let canAdd = true;

		if (event.type === 'revert')
			canAdd = canAdd && this._canAddRevertEvent(chain, event.timestamp);

		return canAdd;
	}
}