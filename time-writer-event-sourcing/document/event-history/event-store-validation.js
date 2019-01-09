export default class EventStoreValidation {
	validate(chain) {
		const state = chain[0].state;

		if (state.text.length > 20000)
			throw new Error('File too long');
	}
}