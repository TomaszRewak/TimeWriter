export default class DeletionEventTextReducer {
	reduce(document, event) {
		switch (event.mode) {
			case 'backward':
				return this._removeBackward(document, event);
			case 'forward':
				return this._removeForward(document, event);
		}
	}

	_removeBackward(document, event) {
		const firstTextPart = document.text.substring(0, event.caret.position - event.length);
		const secondTextPart = document.text.substring(event.caret.position);

		return `${firstTextPart}${secondTextPart}`;
	}

	_removeForward(document, event) {
		const firstTextPart = document.text.substring(0, event.caret.position);
		const secondTextPart = document.text.substring(event.caret.position + event.length);

		return `${firstTextPart}${secondTextPart}`;
	}
}