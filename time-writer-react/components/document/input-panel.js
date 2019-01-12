import React, { Component } from 'react';
import EventFactory from '../../services/event-factory';
import Carets from './carets';
import { TextNavigationService } from '../../external/event-sourcing';

export default class InputPanel extends Component {
	constructor(props) {
		super(props);

		this._textNavigationService = new TextNavigationService();
		this._eventFactory = new EventFactory();

		this.caretsPreview = React.createRef()

		this.keyDown = this.keyDown.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.paste = this.paste.bind(this);
	}

	_getCharacterSize() {
		return {
			width: this.caretsPreview.current.offsetWidth,
			height: this.caretsPreview.current.offsetHeight,
		}
	}

	_getMouseCoordinates(e) {
		const rect = e.target.getBoundingClientRect();
		const characterSize = this._getCharacterSize();

		return {
			line: Math.floor((e.clientY - rect.top) / characterSize.height),
			column: Math.round((e.clientX - rect.left) / characterSize.width)
		};
	}

	_getMousePosition(e) {
		const coordinates = this._getMouseCoordinates(e);

		return this._textNavigationService.getCaretPosition(this.props.text, coordinates);
	}

	keyDown(e) {
		const events = this._eventFactory.prepareKeyDownEvents(e);

		for (const event of events)
			this.props.onNewEvent(event);
	}

	mouseDown(e) {
		const mousePosition = this._getMousePosition(e);
		const events = this._eventFactory.prepareClickEvents(e, mousePosition);

		for (const event of events)
			this.props.onNewEvent(event);

		this.setState({ mouseDownPosition: mousePosition });
	}

	mouseUp(e) {
		const mousePosition = this._getMousePosition(e);

		if (mousePosition === this.state.mouseDownPosition)
			return;

		const event = this._eventFactory.prepareSelectEvent(mousePosition);
		this.props.onNewEvent(event);
	}

	paste(e) {
		const event = this._eventFactory.prepareInsertEvent(e.clipboardData.getData('Text'));
		this.props.onNewEvent(event);
	}

	render() {
		return (
			<div className="input-panel">
				<div
					className="input-interceptor" tabIndex="0"
					onKeyDown={this.keyDown}
					onMouseDown={this.mouseDown}
					onMouseUp={this.mouseUp}
					onPaste={this.paste}>
				</div>
				<div className="character-template" ref={this.caretsPreview} />
			</div>
		);
	}
}