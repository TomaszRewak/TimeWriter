import TextFormattingService from "../../../../services/text-formatting-service";

export default class InsertionEventPreProcessor
{
	constructor()
	{
		this._textFormattingService = new TextFormattingService();
	}

	prepareEvent(document, event, caret)
	{
		return {
			...event,
			text: this._prepareEventText(document, event, caret),
			beginPosition: caret.beginPosition,
			endPosition: caret.endPosition
		}
	}

	_prepareEventText(document, event, caret)
	{
		if (event.text !== '\n')
			return event.text;

		let indent = this._textFormattingService.getIndentAtPosition(document.text, caret.beginPosition);

		return `\n${'\t'.repeat(indent)}`
	}
}