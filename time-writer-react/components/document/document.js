import './_.css';
import './_text.css';

import React, { Component } from 'react';
import Carets from './carets';
import Lines from './lines';
import LineNumbers from './line-numbers';
import { TextDocument } from '../../external/event-sourcing';
import Logs from '../logging/logs';
import InputPanel from './input-panel';
import EventFactory from '../../services/event-factory';
import ServerConnection from '../../services/server-connection';

class Document extends Component {
	constructor(props) {
		super(props);

		this._eventFactory = new EventFactory();
		this._serverConnection = new ServerConnection(this.props.id);

		this.state = {
			document: null,
			history: []
		}

		this.sendEvent = this.sendEvent.bind(this);
		this.applySnapshot = this.applySnapshot.bind(this);
		this.applyEvent = this.applyEvent.bind(this);
		this.updateEvent = this.updateEvent.bind(this);
	}

	async componentDidMount() {
		this.reconnect();
	}

	componentWillUnmount() {
		this._serverConnection.disconnect()
	}

	reconnect() {
		this._serverConnection.disconnect();

		this._textDocument = null;
		this.updateState();

		this._serverConnection.connect(this.applySnapshot, this.applyEvent);
	}

	sendEvent(event) {
		const potentialCommunicationDelay = 1000;
		const reducedEvent = {
			...event,
			timestamp: Date.now() + potentialCommunicationDelay
		}

		if (this.applyEvent(reducedEvent))
			this._serverConnection.sendEvent(reducedEvent, this.updateEvent);

	}

	updateEvent(event, timestamp) {
		if (!timestamp || !this._textDocument.updateTimestamp(event, timestamp))
			this.reconnect();

		this.updateState();
	}

	applySnapshot(snapshot) {
		this._textDocument = new TextDocument(snapshot);
		this.updateState();
	}

	applyEvent(event) {
		if (!this._textDocument)
			return;

		const success = this._textDocument.addEvent(event);
		this.updateState();
		return success;
	}

	updateState() {
		if (!this._textDocument)
			this.setState({ document: null, history: [] });
		else if (this.state.history !== this._textDocument.history)
			this.setState({
				document: this._textDocument.state,
				history: this._textDocument.history
			});
	}

	render() {
		if (!this.state.document)
			return <div className="loading-screen">Loading...</div>;

		return (
			<div className="document-scope">
				<div className="document-scroll">
					<div className="document" >
						<LineNumbers text={this.state.document.text} />
						<div className="document-content">
							<Carets text={this.state.document.text} carets={this.state.document.carets} />
							<Lines text={this.state.document.text} />
							<InputPanel text={this.state.document.text} carets={this.state.document.carets} onNewEvent={this.sendEvent} />
						</div>
					</div>
				</div>
				<Logs history={this.state.history} />
			</div>
		);
	}
}

export default Document;