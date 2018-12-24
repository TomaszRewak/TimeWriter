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
			coordinates = this._reduceCoordinates(coordinates, text[i]);

		return coordinates;
	}

	getCaretPosition(text, coordinates) {			
		let position = 0;

		let pointerCoordinates = { line: 0, column: 0 };
		const targetCoordinates = this._clipCoordinates(coordinates, text);

		while (pointerCoordinates.line < targetCoordinates.line && position < text.length)
			pointerCoordinates = this._reduceCoordinates(pointerCoordinates, text[position++]);

		while (pointerCoordinates.column < targetCoordinates.column && position < text.length && text[position] !== '\n')
			pointerCoordinates = this._reduceCoordinates(pointerCoordinates, text[position++]);

		return position;
	}

	_clipPosition(position, text) {
		return Math.max(0, Math.min(text.length, position));
	}

	_clipCoordinates(coordinates, text) {
		return {
			...coordinates,
			line: this._clipLine(coordinates.line, text)
		};
	}

	_clipLine(line, text) {
		const linesNumber = this.countLines(text);

		return Math.max(0, Math.min(linesNumber - 1, line));
	}

	_reduceCoordinates(coordinates, character) {
		const tabSize = 4;

		switch (character) {
			case '\n': return { column: 0, line: coordinates.line + 1 };
			case '\t': return { column: coordinates.column + tabSize, line: coordinates.line }
			default: return { column: coordinates.column + 1, line: coordinates.line };
		}
	}
}