export default class EventStoreCleanup {
	_cleanupStates(chain) {
		const cleanupStart = this._firstIndexWithState(chain, Math.max(1, chain.length - 12));
		const cleanupEnd = chain.length - 1;
		
		for (let index = cleanupStart + 1; index < cleanupEnd; index++)
			chain[index].state = null;
	}

	_firstIndexWithState(chain, index = 0) {
		while (!chain[index].state)
			index++;

		return index;
	}

	_cleanupLength(chain) {
		if (chain.length < 300)
			return;

		chain.splice(0, chain.length - 250);
		chain.splice(0, this._firstIndexWithState(chain));
	}

	cleanup(chain) {
		this._cleanupLength(chain);
		this._cleanupStates(chain);
	}
}