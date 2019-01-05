export default class EventStoreRepair {
	_getTimestamp(chain, index) {
		return chain[index].event.timestamp;
	}

	_inRange(chain, index) {
		return index >= 0 && index < chain.length;
	}

	_cleanState(chain, index) {
		chain[index].state = null;
	}

	_isTooFarAhead(chain, index) {
		if (!this._inRange(chain, index + 1))
			return false;

		return this._getTimestamp(chain, index) < this._getTimestamp(chain, index + 1);
	}

	_moveBackward(chain, index) {
		const temp = chain[index + 1];
		chain[index + 1] = chain[index];
		chain[index] = temp;

		this._cleanState(chain, index);
		this._cleanState(chain, index + 1)
	}

	fix(chain) {
		let index = 0;

		while (this._isTooFarAhead(chain, index))
			this._moveBackward(chain, index++);
	}
}