export default class EventFactory {
	prepareKeyDownEvents(e) {
		const key = e.keyCode;
		const char = e.key;

		if (key === 86 && e.ctrlKey)
			return [];
		if (key === 90 && e.ctrlKey)
			return [this.prepareUndoEvent()];
		if (key === 89 && e.ctrlKey)
			return [this.prepareRedoEvent()];
		if (key === 37)
			return [this.prepareMoveLeftEvent()];
		if (key === 39)
			return [this.prepareMoveRightEvent()];
		if (key === 38)
			return [this.prepareMoveUpEvent()];
		if (key === 40)
			return [this.prepareMoveDownEvent()];
		if (key === 8)
			return [this.prepareBackwardDeleteEvent()];
		if (key === 46)
			return [this.prepareForwardDeleteEvent()];
		if (key === 13)
			return [this.prepareInsertEvent('\n')];
		if (key === 9)
			return [this.prepareInsertEvent('\t')];
		if (key === 32)
			return [this.prepareInsertEvent(' ')];
		if (key >= 48 && key <= 90 || key >= 96 && key <= 111 || key >= 186 && key <= 222)
			return [this.prepareInsertEvent(char)];
		return [];
	}

	prepareClickEvents(e, mousePosition) {
		return [
			this.prepareRemoveCaretsEvent(),
			this.prepareAddCaretEvent(mousePosition)
		]
	}

	prepareUndoEvent() {
		return { type: 'undo' };
	}

	prepareRedoEvent() {
		return { type: 'redo' };
	}

	prepareMoveLeftEvent() {
		return { type: 'navigate', mode: 'move-horizontally', offset: -1 };
	}

	prepareMoveRightEvent() {
		return { type: 'navigate', mode: 'move-horizontally', offset: +1 };
	}

	prepareMoveUpEvent() {
		return { type: 'navigate', mode: 'move-vertically', offset: -1 };
	}

	prepareMoveDownEvent() {
		return { type: 'navigate', mode: 'move-vertically', offset: +1 };
	}

	prepareBackwardDeleteEvent() {
		return { type: 'delete', mode: 'backward', length: 1 };
	}

	prepareForwardDeleteEvent() {
		return { type: 'delete', mode: 'forward', length: 1 };
	}

	prepareInsertEvent(text) {
		return { type: 'insert', text };
	}

	prepareAddCaretEvent(coordinates) {
		return { type: 'manage-carets', operation: 'add-caret', coordinates };
	}

	prepareRemoveCaretsEvent() {
		return { type: 'manage-carets', operation: 'remove-carets' };
	}

}