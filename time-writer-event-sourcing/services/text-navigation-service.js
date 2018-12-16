export default class TextNavigationService {
	countLines(text) {
		let counter = 1;

		for (let i = 0; i < text.length; i++)
			if (text[i] === '\n')
				counter++;

		return counter;
	}

	getCaretCoordinates(text, position, configuration) {
		position = this._clipPosition(position, text);

		let coordinates = { line: 0, column: 0 }

		for (let i = 0; i < position; i++)
			coordinates = this._reduceCoordinates(coordinates, text[i], configuration);

		return coordinates;
	}

	getCaretPosition(text, coordinates, configuration) {
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
			pointerCoordinates = this._reduceCoordinates(pointerCoordinates, text[position], configuration);

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

	_reduceCoordinates(coordinates, character, configuration) {
		switch (character) {
			case '\n': return { column: 0, line: coordinates.line + 1 };
			case '\t': return { column: coordinates.column + configuration.tabSize, line: coordinates.line }
			default: return { column: coordinates.column + 1, line: coordinates.line };
		}
	}
}