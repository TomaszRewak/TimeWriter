export default class EventFactory
{
	prepareKeyDownEvent(document, e) {
		const key = e.keyCode;
		const char = e.key;

		if (key === 37)
			return this._prepareMoveLeftEvent();
		if (key === 39)
			return this._prepareMoveRightEvent();			
		if (key === 38)
			return this._prepareMoveUpEvent();
		if (key === 40)
		return this._prepareMoveDownEvent();
		if (key === 8)
			return { type: 'delete', mode: 'backward', length: 1 };
		if (key === 46)
			return { type: 'delete', mode: 'forward', length: 1 };
		if (key === 13)
			return { type: 'insert', text: '\n' };
		if (key === 9)
			return {  type: 'insert', text: '\t' };
		if (key === 32)
			return { type: 'insert', text: ' ' };
		if (key >= 48 && key <= 90 || key >= 96 && key <= 111 || key >= 186 && key <= 222)
			return { type: 'insert', text: char };
		return null;
	}

	_prepareMoveLeftEvent()
	{
		return { type: 'navigate', mode: 'move-horizontally', offset: -1 };
	}

	_prepareMoveRightEvent()
	{
		return { type: 'navigate', mode: 'move-horizontally', offset: +1 };
	}

	_prepareMoveUpEvent()
	{
		return { type: 'navigate', mode: 'move-vertically', offset: -1 };
	}

	_prepareMoveDownEvent()
	{
		return { type: 'navigate', mode: 'move-vertically', offset: +1 };
	}
}