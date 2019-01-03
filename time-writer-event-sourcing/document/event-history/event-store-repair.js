export default class EventStoreRepair {	
	_hasTimestamp(chain, index) {
		return !!chain[index].timestamp;
	}

	_getTimestamp(chain, index) {
		chain[index].timestamp;
	}

	_inRange(chain, index) {
		return index >= 0 && index < chain.length;
	}

	_isTooFarBehind(chain, index) {
		if (!this._inRange(chain, index + 1))
			return false;

		return this._hasTimestamp(chain, index + 1) && this._getTimestamp(chain, index) > this._getTimestamp(chain, index + 1);
	}

	_isTooFarAhead(chain, index) {
		if (!this._inRange(chain, index - 1))
			return false;

		return this._hasTimestamp(chain, index - 1) && this._getTimestamp(chain, index) < this._getTimestamp(chain, index - 1);
	}

	_moveForward(chain, index) {
		const temp = chain[index + 1];
		chain[index + 1] = chain[index];
		chain[index] = temp;
	}

	_moveBackward(chain, index) {
		const temp = chain[index - 1];
		chain[index - 1] = chain[index];
		chain[index] = temp;
	}

	_invalidateStates(chain, index) {
		while (this._inRange(chain, index))
			chain[index++].state = null;
	}

	fix(chain, index) {
		if (!this._hasTimestamp(chain, index))
			return;

		let newIndex = index;

		while (this._isTooFarBehind(chain, newIndex))
			this._moveForward(chain, newIndex++);

		while (this._isTooFarAhead(chain, newIndex))
			this._moveBackward(chain, newIndex--);

		if (newIndex !== index)
			this._invalidateStates(chain, Math.min(index, newIndex));
	}
}