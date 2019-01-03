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
import Logs from '../logs/logs';

class Document extends Component {
	constructor(props) {
		super(props);

		this._eventFactory = new EventFactory();

		this.keyDown = this.keyDown.bind(this);
		this.click = this.click.bind(this);

		this.state = {
			document: null,
			logs: []
		}
	}

	async componentDidMount() {
		const documentId = this.props.id;

		const serverUrl = `http://localhost:1337`;
		//const serverUrl = `http://api.text-sourcing.tomasz-rewak.com`;

		const response = await fetch(`${serverUrl}/document/${documentId}`);
		const currentState = await response.json();

		this._textDocument = new TextDocument(currentState);

		this.setState({ document: this._textDocument.state })

		this._socket = SocketIO(`${serverUrl}?document=${documentId}`);
		this._socket.on('document change', event => {
			this.logEvent(event);
			this.applyEvent(event);
		});

		this.sendEvent(this._eventFactory.prepareAddCaretEvent({ line: 0, column: 0 }));
	}

	componentWillUnmount() {
		this._socket.disconnect()
	}

	keyDown(e) {
		const events = this._eventFactory.prepareKeyDownEvents(e);

		for (const event of events)
			this.sendEvent(event);

		// e.preventDefault();
		// e.stopPropagation();
	}

	click(e) {
		const events = this._eventFactory.prepareClickEvents(e);

		for (const event of events)
			this.sendEvent(event);

		// e.preventDefault();
		// e.stopPropagation();
	}

	sendEvent(event) {
		this.logEvent(event);
		this.applyEvent(event);
		this._socket.emit('document change', event, timestamp => {
			if (timestamp)
				this._textDocument.setTimestemp(event, timestamp);
			else 
				this.reload(); // TODO: Needs to be implemented.
		});
	}

	applyEvent(event) {
		this._textDocument.addEvent(event);

		this.setState({
			document: this._textDocument.state
		});
	}

	logEvent(event) {
		this.setState({
			logs: [
				event,
				...this.state.logs.slice(0, 5)
			]
		})
	}

	render() {
		if (!this.state.document)
			return <div className="loading-screen">Loading...</div>;

		return (
			<div className="document-scope">
				<div className="document-scroll">
					<div className="document" >
						<LineNumbers text={this.state.document.text} />
						<div className="document-content" tabIndex="0" onKeyDown={this.keyDown} onMouseDown={this.click} >
							<Carets document={this.state.document} />
							<Lines text={this.state.document.text} />
						</div>
					</div>
				</div>
				<Logs logs={this.state.logs} />
			</div>
		);
	}
}

export default Document;