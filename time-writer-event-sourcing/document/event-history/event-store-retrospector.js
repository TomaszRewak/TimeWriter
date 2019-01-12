export default class EventStoreRetrospector {
	tryUpdateTimestamp(chain, event, timestamp) {
		const nodeIndex = this._findNodeIndex(chain, event);

		if (nodeIndex === -1)
			throw new Error('Event not found');

		if (nodeIndex === chain.length - 1)
			throw new Error('An attempt to update last node is an invalid operation');

		if (!this._canUpdateTimestampWithoutMovingNode(chain, nodeIndex, timestamp))
			return false;

		chain[nodeIndex].event.timestamp = timestamp;

		return true;
	}

	_canUpdateTimestampWithoutMovingNode(chain, nodeIndex, timestamp) {
		return (
			(nodeIndex === 0 || chain[nodeIndex - 1].event.timestamp >= timestamp)
			&&
			chain[nodeIndex + 1].event.timestamp <= timestamp
		);
	}

	_findNodeIndex(chain, event) {
		return chain.findIndex(node => node.event === event);
	}
}