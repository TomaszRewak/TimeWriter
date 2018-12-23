import './_.css';
import './_text.css';

import React, { Component } from 'react';
import Carets from './carets';
import Lines from './lines';
import LineNumbers from './line-numbers';
import { TextDocument } from '../../external/event-sourcing';
import SocketIO from 'socket.io-client';
import { get } from 'http';
import EventFactory from '../../services/event-factory';

class Document extends Component {
	constructor(props) {
		super(props);

		this.keyDown = this.keyDown.bind(this);

		this.state = {
			document: null
		};
	}

	async componentDidMount() {
		const documentId = 2;

		const response = await fetch(`http://localhost:1337/document/${documentId}`);
		const currentState = await response.json();

		this._textDocument = new TextDocument(currentState);
		this._eventFactory = new EventFactory();

		this.setState({ document: this._textDocument.state })

		this._socket = SocketIO(`http://localhost:1337?document=${documentId}`);
		this._socket.on('document change', event => {
			console.log(event);
			this.applyEvent(event);
		});

		console.dir(this._socket);
		this.sendEvent({ type: 'manage-carets', operation: 'add-caret', position: 0 });
	}

	keyDown(e) {
		const event = this._eventFactory.prepareKeyDownEvent(this._textDocument.state, e);

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
						<Carets document={this.state.document} />
						<Lines text={this.state.document.text} />
					</div>
				</div>
			</div>
		);
	}
}

export default Document;