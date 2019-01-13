export default class EventStoreCleanup {
	_cleanupStates(chain) {
		const cleanupEnd = this._closestIndexWithState(chain, Math.min(12, chain.length - 1));
		
		for (let index = 1; index < cleanupEnd; index++)
			chain[index].state = null;
	}

	_closestIndexWithState(chain, index) {
		while (!chain[index].state)
			index--;

		return index;
	}

	_cleanupLength(chain) {
		if (chain.length < 400)
			return;

		chain.splice(this._closestIndexWithState(chain, 350) + 1);
	}

	cleanup(chain) {
		this._cleanupLength(chain);
		this._cleanupStates(chain);
	}
}