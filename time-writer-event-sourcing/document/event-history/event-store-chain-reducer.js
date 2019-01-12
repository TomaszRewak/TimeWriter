export default class EventStoreChainReducer {
	addEvent(chain, event) {
		return [
			{
				event,
				state: null
			},
			...chain
		];
	}

	removeEvent(chain, event) {
		let nodeIndex = chain.findIndex(node => node.event === event);
		let newChain = chain.filter((_, i) => i !== nodeIndex);

		for (let index = 0; index < nodeIndex; index++)
			newChain[index].state = null;

		return newChain;
	}
}