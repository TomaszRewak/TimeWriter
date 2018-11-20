export default class CaretPositionService {
	getActiveCaretPositions(carets, owner) {
		const positions = carets
			.filter(caret => caret.owner === owner)
			.map(caret => caret.position);

		return [...new Set(positions)];
	}
}