import './_.css';
import './_text.css';

import React, { Component } from 'react';
import Carets from './carets';
import Lines from './lines';
import LineNumbers from './line-numbers';
import { TextDocument } from '../../external/event-sourcing';
import SocketIO from 'socket.io-client';
import { get } from 'http';

class Document extends Component {
	constructor(props) {
		super(props);

		this.keyDown = this.keyDown.bind(this);

		this.state = {
			document: null,
			configuration: {
				tabSize: 4
			}
		};
	}

	async componentDidMount() {
		const documentId = 2;

		const response = await fetch(`http://localhost:1337/document/${documentId}`);
		const currentState = await response.json();

		this._textDocument = new TextDocument(currentState);

		this.setState({ document: this._textDocument.state })

		this._socket = SocketIO(`http://localhost:1337?document=${documentId}`);
		this._socket.on('document change', event => {
			console.log(event);
			this.applyEvent(event);
		});

		console.dir(this._socket);
		this.sendEvent(this.prepareEvent({ type: 'manage-carets', operation: 'add-caret', position: 0 }));
	}

	prepareEvent(baseEvent) {
		return {
			...baseEvent,
			author: null,
			configuration: this.state.configuration
		}
	}

	prepareKeyPressEvent(e) {
		const key = e.key;
		const author = null;

		return { author, type: 'insert', text: key };
	}

	prepareKeyDownEvent(e) {
		const key = e.keyCode;
		const char = e.key;

		if (key === 37 || key === 39)
			return { type: 'navigate', mode: 'move-horizontally', offset: key === 37 ? -1 : +1 };
		else if (key === 38 || key === 40)
			return { type: 'navigate', mode: 'move-vertically', offset: key === 38 ? -1 : +1 };
		else if (key === 8)
			return { type: 'delete', mode: 'backward', length: 1 };
		else if (key === 46)
			return { type: 'delete', mode: 'forward', length: 1 };
		if (key === 13)
			return { type: 'insert', text: '\n' };
		if (key === 9)
			return {  type: 'insert', text: '\t' };
		if (key === 32)
			return { type: 'insert', text: ' ' };
		else if (key >= 48 && key <= 90 || key >= 96 && key <= 111 || key >= 186 && key <= 222)
			return { type: 'insert', text: char };
		return null;
	}

	keyDown(e) {
		const event = this.prepareEvent(this.prepareKeyDownEvent(e));

		if (!event)
			return;

		this.sendEvent(event);
	}

	sendEvent(event) {
		console.log(event);
		this.applyEvent(event);
		this._socket.emit('document change', event, timestamp => {
			console.log(timestamp);
			event.timestamp = timestamp;
		});
	}

	applyEvent(event) {
		this._textDocument.addEvent(event);

		this.setState({
			document: this._textDocument.state
		});
	}

	render() {
		if (!this.state.document)
			return <div>Loading...</div>;

		return (
			<div>
				<h1>{this.props.id}</h1>
				<div className="document" tabIndex="0" onKeyDown={this.keyDown}>
					<LineNumbers text={this.state.document.text} />
					<div className="document-content">
						<Carets document={this.state.document} configuration={this.state.configuration} />
						<Lines text={this.state.document.text} />
					</div>
				</div>
			</div>
		);
	}
}

export default Document;