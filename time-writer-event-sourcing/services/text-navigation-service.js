export default class TextNavigationService {
	countLines(text) {
		let counter = 1;

		for (let i = 0; i < text.length; i++)
			if (text[i] === '\n')
				counter++;

		return counter;
	}

	getColumn(text, position) {
		let column = 0;

		for (let i = position; i > 0 && text[i - 1] != '\n'; i--)
			column += this._getCharacterLength(text[i - 1]);

		return column;
	}

	getLine(text, position) {
		let line = 0;

		for (let i = 0; i < position; i++)
			if (text[i] == '\n')
				line++;

		return line;
	}

	getCaretCoordinates(text, position) {
		position = this._clipPosition(position, text);

		return {
			line: this.getLine(text, position),
			column: this.getColumn(text, position)
		}
	}

	getCaretPosition(text, coordinates) {
		let position = 0;

		for (let line = 0; line < coordinates.line && position < text.length; position++)
			if (text[position] == '\n')
				line++;

		for (let column = 0; column < coordinates.column && position < text.length && text[position] != '\n'; position++)
			column += this._getCharacterLength(text, position);

		return position;
	}

	getEndOfLineColumn(text, position) {
		let column = this.getColumn(text, position);

		for (let i = position; i < text.length && text[i] != '\n'; i++)
			column += this._getCharacterLength(text[i]);

		return column;
	}

	getEndOfLinePosition(text, position) {
		while (position < text.length && text[position] != '\n')
			position++;

		return position;
	}

	_clipPosition(position, text) {
		return Math.max(0, Math.min(text.length, position));
	}

	_getCharacterLength(character) {
		switch (character) {
			case '\t': return 4
			default: return 1;
		}
	}
}