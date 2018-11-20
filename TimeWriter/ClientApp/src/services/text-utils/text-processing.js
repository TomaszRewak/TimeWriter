export default class TextProcessing {
	static takeTextPartBounds(text, splitPoints) {
		const textStart = 0;
		const textEnd = text.length;

		const partsStarts = [textStart, ...splitPoints];
		const partsEnds = [...splitPoints, textEnd];

		return partsStarts.map((value, index) => [value, partsEnds[index]]);
	}

	static splitText(text, splitPoints) {
		const partsLimits = this.takeTextPartBounds(text, splitPoints);

		return partsLimits.map(([start, end]) => text.substring(start, end));
	}
}