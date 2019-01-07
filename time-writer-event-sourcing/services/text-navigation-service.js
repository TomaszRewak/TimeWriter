export default class TextNavigationService {
	countLines(text) {
		let counter = 1;

		for (let i = 0; i < text.length; i++)
			if (text[i] === '\n')
				counter++;

		return counter;
	}

	getColumn(text, position) {
		let length = 0;

		for (let i = position; i > 0 && text[i - 1] != '\n'; i--)
			length++;

		return length;
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

	getEndOfLineColumn(text, position) {
		let number = 0;

		for (let i = position; i > 0 && text[i - 1] != '\n'; i--)
			number += this._getCharacterLength(text[i - 1]);

		for (let i = position; i < text.length && text[i] != '\n'; i++)
			number += this._getCharacterLength(text[i]);

		return number;
	}

	getEndOfLinePosition(text, position) {
		while (position < text.length && text[position] != '\n')
			position++;

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
		switch (character) {
			case '\n': return { column: 0, line: coordinates.line + 1 };
			default: return { column: coordinates.column + this._getCharacterLength(character), line: coordinates.line };
		}
	}

	_getCharacterLength(character) {
		switch (character) {
			case '\t': return 4
			default: return 1;
		}
	}
}