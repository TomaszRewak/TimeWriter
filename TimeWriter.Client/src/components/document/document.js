import './_.css';

import React, { Component } from 'react';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import Carets from './carets';
import Lines from './lines';
import LineNumbers from './line-numbers';
import { TextDocument } from '../../../external/event-sourcing';

class Document extends Component {
	constructor(props) {
		super(props);

		//this._hubConnection = new HubConnectionBuilder()
		//	.withUrl("/document_hub")
		//	.configureLogging(LogLevel.Information)
		//	.build();
		this._textDocument = new TextDocument();

		this.keyPressed = this.keyPressed.bind(this);

		this.state = {
			document: this._textDocument.state
		};
	}

	componentDidMount() {
		//this._hubConnection.start().catch(err => console.error(err.toString()));
		//this._hubConnection.on('addMessage', this.addMessage);
		//this._hubConnection.invoke('sendMessage', 'dupa');
	}

	keyPressed(e) {
		const key = e.key;
		const keyCode = e.keyCode;

		if (keyCode === 37 || keyCode === 39)
			this._textDocument.addEvent({ author: 1, type: 'navigate', mode: 'move-horizontally', offset: keyCode === 37 ? -1 : +1 });
		else if (keyCode === 38 || keyCode === 40)
			this._textDocument.addEvent({ author: 1, type: 'navigate', mode: 'move-vertically', offset: keyCode === 38 ? -1 : +1 });
		else if (keyCode === 8)
			this._textDocument.addEvent({ author: 1, type: 'delete', mode: 'backward', length: 1 });
		else if (keyCode === 46)
			this._textDocument.addEvent({ author: 1, type: 'delete', mode: 'forward', length: 1 });
		if (keyCode === 13)
			this._textDocument.addEvent({ author: 1, type: 'insert', text: '\n' });
		if (keyCode === 32)
			this._textDocument.addEvent({ author: 1, type: 'insert', text: ' ' });
		else if (keyCode >= 48)
			this._textDocument.addEvent({ author: 1, type: 'insert', text: key });

		this.setState({
			document: this._textDocument.state
		});
	}

	render() {
		var lines = this.state.document.text.split('\n');

		return (
			<div>
				<h1>{this.props.id}</h1>
				<div className="document" tabIndex="0" onKeyDown={this.keyPressed}>
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