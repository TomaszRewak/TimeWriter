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
			caret
		}
	}

	_prepareEventText(document, event, caret)
	{
		if (event.text !== '\n')
			return event.text;

		let indent = this._textFormattingService.getIndentAtPosition(document.text, caret.position);

		return `\n${'\t'.repeat(indent)}`
	}
}