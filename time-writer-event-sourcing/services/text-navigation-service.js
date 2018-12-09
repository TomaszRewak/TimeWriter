export default class TextNavigationService {
	countLines(text) {
		let counter = 1;

		for (let i = 0; i < text.length; i++)
			if (text[i] === '\n')
				counter++;

		return counter;
	}

	getCaretCoordinates(text, position) {
		position = this._clipPosition(position, text);

		let coordinates = { line: 0, column: 0 }

		for (let i = 0; i < position; i++)
			this._moveCoordinates(coordinates, text[i]);

		return coordinates;
	}

	getCaretPosition(text, coordinates) {
		coordinates = this._clipCoordinates(coordinates, text);

		let position = 0;

		for (
			let pointerCoordinates = { line: 0, column: 0 };
			pointerCoordinates.line < coordinates.line ||
			pointerCoordinates.line === coordinates.line &&
			pointerCoordinates.column < coordinates.column &&
			text[position] !== '\n';
			position++
		)
			this._moveCoordinates(pointerCoordinates, text[position]);

		return position;
	}

	_clipPosition(position, text) {
		return Math.max(0, Math.min(text.length, position));
	}

	_clipCoordinates(coordinates, text) {
		const linesNumber = this.countLines(text);

		return {
			...coordinates,
			line: Math.max(0, Math.min(linesNumber - 1, coordinates.line))
		};
	}

	_moveCoordinates(coordinates, character) {
		if (character === '\n') {
			coordinates.column = 0;
			coordinates.line = coordinates.line + 1;
		}
		else {
			coordinates.column = coordinates.column + 1; 
			coordinates.line = coordinates.line;
		}
	}
}