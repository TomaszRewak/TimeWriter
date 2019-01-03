export default class EventStoreCleanup {
	_cleanupStates(chain) {
		if (chain.length <= 15)
			return;

		if (chain.length % 5 !== 0)
			return;

		let hasStateInRange = false;

		for (let i = chain.length - 15; i > chain.length - 5; i++) {

				delete chain[i].state;
		}
	}

	_firstIndexWithState(chain) {
		let index = 0;

		while (!chain[index].state)
			index++;

		return index;
	}

	_cleanupLength(chain) {
		if (chain.length < 150)
			return;

		chain.splice(0, chain.length - 100);
		chain.splice(0, this._firstIndexWithState(chain));
	}

	cleanup(chain) {
		this._cleanupStates(chain);
		this._cleanupLength(chain);
	}
}