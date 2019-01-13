export default class TextNavigationService {
	countLines(text) {
		let counter = 1;

		for (let i = 0; i < text.length; i++)
			if (text[i] === '\n')
				counter++;

		return counter;
	}

	getLineBegin(text, position) {
		while (position > 0 && text[position - 1] != '\n')
			position--;

		return position;
	}

	getLineEnd(text, position) {
		while (position < text.length && text[position] != '\n')
			position++;

		return position;
	}

	getFragmentWidth(text, begin, end, startColumn) {
		let column = startColumn;

		for (let index = begin; index < end; index++)
			column += this._getCharacterWidth(text[index], column);

		return column - startColumn;
	}

	getColumn(text, position) {
		let lineBegin = this.getLineBegin(text, position);

		return this.getFragmentWidth(text, lineBegin, position, 0);
	}

	getLine(text, position) {
		let line = 0;

		for (let i = 0; i < position; i++)
			if (text[i] == '\n')
				line++;

		return line;
	}

	getCaretCoordinates(text, position) {
		position = this.clipPosition(position, text);

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
			column += this._getCharacterWidth(text[position], column);

		return position;
	}

	getEndOfLineColumn(text, position) {
		let lineBegin = this.getLineBegin(text, position);
		let lineEnd = this.getLineEnd(text, position);

		return this.getFragmentWidth(text, lineBegin, lineEnd, 0);
	}

	getEndOfLinePosition(text, position) {
		while (position < text.length && text[position] != '\n')
			position++;

		return position;
	}

	getNextFastPosition(text, position) {
		if (position == text.length)
			return position;

		const template = this._getCharacterTemplate(text[position]);

		while (position < text.length && template.test(text[position]))
			position++;

		return position;
	}

	getPreviousFastPosition(text, position) {
		if (position == 0)
			return position;

		const template = this._getCharacterTemplate(text[position - 1]);

		while (position > 0 && template.test(text[position - 1]))
			position--;

		return position;
	}

	clipPosition(position, text) {
		return Math.max(0, Math.min(text.length, position));
	}

	compareCoordinates(a, b) {
		return a === b || !!a && !!b && a.column === b.column && a.line == b.line;
	}

	_getCharacterWidth(character, column) {
		switch (character) {
			case '\t': return Math.ceil((column + 1) / 4) * 4 - column;
			default: return 1;
		}
	}

	_getCharacterTemplate(character) {
		const templates = [
			/[\t ]/,
			/[\w]/,
			/[^\w\t ]/
		]

		for (const template of templates)
			if (template.test(character))
				return template
	}

	_isWhiteSpace(character) {
		return /[\n\t ]/.test(character);
	}

	_isLetter(character) {
		return /[\w]/.test(character);
	}

	_isSpecialCharacter(character) {
		return !this._isLetter(character) && !this._isWhiteSpace(character);
	}
}