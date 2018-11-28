import './_.css';

import React, { Component } from 'react';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import TextDocument from '../../services/text-document';
import Line from './line';
import Caret from './caret';

class Document extends Component {
	constructor(props) {
		super(props);

		this._hubConnection = new HubConnectionBuilder()
			.withUrl("/document_hub")
			.configureLogging(LogLevel.Information)
			.build();
		this._textDocument = new TextDocument();

		this.keyPressed = this.keyPressed.bind(this);

		this.state = {
			document: this._textDocument.state
		};
	}

	componentDidMount() {
		this._hubConnection.start().catch(err => console.error(err.toString()));
		//this._hubConnection.on('addMessage', this.addMessage);
		//this._hubConnection.invoke('sendMessage', 'dupa');
	}

	keyPressed(e) {
		const key = e.key;
		const keyCode = e.keyCode;

		if (keyCode === 32)
			this._textDocument.addEvent({ author: 1, type: 'insert', text: ' ' });
		else if (48 <= keyCode && keyCode <= 90)
			this._textDocument.addEvent({ author: 1, type: 'insert', text: key });
		else if (keyCode === 37 || keyCode === 39)
			this._textDocument.addEvent({ author: 1, type: 'navigate', offset: keyCode === 37 ? -1 : +1 });
		else if (keyCode === 8)
			this._textDocument.addEvent({ author: 1, type: 'delete', length: 1 });

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
					<div className="line-numbers">
						{[...Array(lines.length).keys()]
							.map(i => i + 1)
							.map(number => <div key={number} className="line-number">{number}</div>)
						}
					</div>
					<div className="document-content">
						<div className="carets">
							_
							{this.state
								.document
								.carets
								.map(caret => <Caret key={caret.id} caret={caret} />)}
						</div>
						<div className="lines">
							{lines.map(line => <Line key={line.id} text={line} />)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Document;