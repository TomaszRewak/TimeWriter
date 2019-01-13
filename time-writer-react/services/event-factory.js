export default class EventFactory {
	prepareKeyDownEvents(e) {
		const key = e.keyCode;
		const char = e.key;

		if (key === 86 && e.ctrlKey)
			return [];
		if (e.keyCode == 83 && e.ctrlKey)
			return [];
		if (e.keyCode === 40 && e.ctrlKey)
			return [];
		if (e.keyCode === 38 && e.ctrlKey)
			return [];
		if (key === 27)
			return [this.prepareRemoveAdditionalCaretsEvent()];
		if (key === 90 && e.ctrlKey)
			return [this.prepareUndoEvent()];
		if (key === 89 && e.ctrlKey)
			return [this.prepareRedoEvent()];
		if (key === 37)
			return [this.prepareMoveLeftEvent(e.ctrlKey, e.shiftKey)];
		if (key === 39)
			return [this.prepareMoveRightEvent(e.ctrlKey, e.shiftKey)];
		if (key === 38 && e.ctrlKey)
			return [];
		if (key === 38 && e.altKey && e.shiftKey)
			return [this.prepareAddCaretAboveEvent()];
		if (key === 38)
			return [this.prepareMoveUpEvent(e.shiftKey)];
		if (key === 40 && e.ctrlKey)
			return [];
		if (key === 40 && e.altKey && e.shiftKey)
			return [this.prepareAddCaretBelowEvent()];
		if (key === 40)
			return [this.prepareMoveDownEvent(e.shiftKey)];
		if (key === 8)
			return [this.prepareBackwardDeleteEvent(e.ctrlKey)];
		if (key === 46)
			return [this.prepareForwardDeleteEvent(e.ctrlKey)];
		if (key === 65 && e.ctrlKey)
			return [this.prepareRemoveCaretsEvent(), this.prepareSelectAllEvent()];
		if (key === 67 && e.ctrlKey)
			return [];
		if (key === 88 && e.ctrlKey)
			return [];
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

	prepareClickEvents(e, position) {
		if (e.shiftKey)
			return [this.prepareSelectEvent(position)]
		if (e.ctrlKey)
			return [this.prepareAddCaretEvent(position)];
		return [this.prepareRemoveCaretsEvent(), this.prepareAddCaretEvent(position)];
	}

	prepareUndoEvent() {
		return { type: 'undo' };
	}

	prepareRedoEvent() {
		return { type: 'redo' };
	}

	prepareMoveLeftEvent(fast, select) {
		return { type: 'navigate', mode: 'move-horizontally', direction: 'left', fast: !!fast, select: !!select };
	}

	prepareMoveRightEvent(fast, select) {
		return { type: 'navigate', mode: 'move-horizontally', direction: 'right', fast: !!fast, select: !!select };
	}

	prepareMoveUpEvent(select) {
		return { type: 'navigate', mode: 'move-vertically', direction: 'up', select: !!select };
	}

	prepareMoveDownEvent(select) {
		return { type: 'navigate', mode: 'move-vertically', direction: 'down', select: !!select };
	}

	prepareDeleteEvent() {
		return { type: 'delete', mode: 'simple' };
	}

	prepareBackwardDeleteEvent(fast) {
		return { type: 'delete', mode: 'backward', fast: !!fast };
	}

	prepareForwardDeleteEvent(fast) {
		return { type: 'delete', mode: 'forward', fast: !!fast };
	}

	prepareInsertEvent(text) {
		return { type: 'insert', text };
	}

	prepareAddCaretEvent(position) {
		return { type: 'manage-carets', operation: 'add-caret', placement: 'position', position };
	}

	prepareAddCaretAboveEvent() {
		return { type: 'manage-carets', operation: 'add-caret', placement: 'above' };
	}

	prepareAddCaretBelowEvent() {
		return { type: 'manage-carets', operation: 'add-caret', placement: 'below' };
	}

	prepareRemoveCaretsEvent() {
		return { type: 'manage-carets', operation: 'remove-carets' };
	}

	prepareRemoveAdditionalCaretsEvent() {
		return { type: 'manage-carets', operation: 'remove-carets', leaveFirst: true };
	}

	prepareSelectEvent(position) {
		return { type: 'manage-carets', operation: 'select', position };
	}

	prepareSelectAllEvent() {
		return { type: 'manage-carets', operation: 'add-caret', placement: 'all' }
	}
}