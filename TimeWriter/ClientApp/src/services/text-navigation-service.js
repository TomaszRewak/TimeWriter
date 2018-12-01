export default class TextNavigationService {
	countLines(text) {
		let counter = 0;

		for (let i = 0; i < text.length; i++)
			if (text[i] === '\n')
				counter++;

		return counter;
	}

	getCaretCoordinates(text, position) {
		let line = 0;
		let column = 0;

		for (let i = 0; i < text.length && i < position; i++) {
			if (text[i] === '\n') {
				column = 0;
				line++;
			}
			else {
				column++;
			}
		}

		return { line, column };
	}
}