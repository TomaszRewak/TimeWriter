export default class TextFormattingService {
	getIndentAtPosition(text, position) {
		let indent = 0;

		for (let i = position - 1; i >= 0 && text[i] !== '\n'; i--)
			indent = this._reduceIndent(indent, text[i]);

		return indent;
	}

	_reduceIndent(indent, character) {
		if (character === '\t')
			return indent + 1;
		else
			return 0;
	}
}