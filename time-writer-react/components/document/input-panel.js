import React, { Component } from 'react';
import EventFactory from '../../services/event-factory';
import { TextNavigationService } from '../../external/event-sourcing';
import Carets from './carets';

export default class InputPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this._textNavigationService = new TextNavigationService();
		this._eventFactory = new EventFactory();

		this.caretsPreview = React.createRef();
		this.inputInterceptor = React.createRef();

		this.keyDown = this.keyDown.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
		this.paste = this.paste.bind(this);
		this.copy = this.copy.bind(this);
		this.cut = this.cut.bind(this);
	}

	keyDown(e) {
		const events = this._eventFactory.prepareKeyDownEvents(e);

		if (events.length > 0)
			e.preventDefault();

		for (const event of events)
			this.props.onNewEvent(event);
	}

	mouseDown(e) {
		const mousePosition = this._getMousePosition(e);
		const events = this._eventFactory.prepareClickEvents(e, mousePosition);

		for (const event of events)
			this.props.onNewEvent(event);

		this.setState({ mouseDownPosition: mousePosition });
		this.setState({ mouseDown: true });
	}

	mouseMove(e) {
		if (!!e.buttons !== this.state.mouseDown)
			this.setState({ mouseDown: !!e.buttons });

		if (!this.state.mouseIn)
			this.setState({ mouseIn: true });

		const mousePosition = this._getMousePosition(e);

		if (this.state.mousePosition !== mousePosition)
			this.setState({ mousePosition: mousePosition })
	}

	mouseUp(e) {
		this.setState({ mouseDown: false });

		const mousePosition = this._getMousePosition(e);
		if (mousePosition === this.state.mouseDownPosition)
			return;

		this.props.onNewEvent(this._eventFactory.prepareSelectEvent(mousePosition));

		e.preventDefault();
	}

	mouseLeave(e) {
		this.setState({ mouseIn: false })
	}

	paste(e) {
		const event = this._eventFactory.prepareInsertEvent(e.clipboardData.getData('Text'));
		this.props.onNewEvent(event);
	}

	copy(e) {
		this._copySelectedText(e);
	}

	cut(e) {
		this._copySelectedText(e);

		const event = this._eventFactory.prepareDeleteEvent();
		this.props.onNewEvent(event);
	}

	preparePreviewCarets() {
		if (this.state.mouseDown)
			return this.props.carets.filter(caret => !caret.owner).map(caret => ({ ...caret, endPosition: this.state.mousePosition }));
		else if (this.state.mouseIn)
			return [{ beginPosition: this.state.mousePosition, endPosition: this.state.mousePosition }];
		else
			return [];
	}

	render() {
		console.log('aaa');

		return (
			<div className="input-panel">
				<div
					className="input-interceptor" tabIndex="0" ref={this.inputInterceptor}
					onKeyDown={this.keyDown}
					onMouseDown={this.mouseDown}
					onMouseUp={this.mouseUp}
					onMouseMove={this.mouseMove}
					onMouseLeave={this.mouseLeave}
					onPaste={this.paste}
					onCopy={this.copy}
					onCut={this.cut}>
				</div>
				<div className="character-template" ref={this.caretsPreview}>0</div>
				<Carets text={this.props.text} carets={this.preparePreviewCarets()} style={{ opacity: this.state.mouseIn ? 0.25 : 0.08 }} />
			</div>
		);
	}

	_copySelectedText(e) {
		const selectedText = this.props
			.carets
			.map(caret => this.props.text.substring(Math.min(caret.beginPosition, caret.endPosition), Math.max(caret.beginPosition, caret.endPosition)))
			.join('');

		e.clipboardData.setData('text/plain', selectedText);
		e.preventDefault();
	}

	_getCharacterSize() {
		const rect = this.caretsPreview.current.getBoundingClientRect()

		return {
			width: rect.width,
			height: rect.height,
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
}