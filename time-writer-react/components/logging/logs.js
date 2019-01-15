import './_.css';

import React, { Component } from 'react';
import Log from './log';

export default class Logs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showLogs: true
		};

		this.showLogs = this.showLogs.bind(this);
		this.hideLogs = this.hideLogs.bind(this);
	}

	showLogs() {
		this.setState({ showLogs: true });
	}

	hideLogs() {
		this.setState({ showLogs: false });
	}

	renderVisible() {
		const logs = this.props.history.slice(0, 10).map(n => n.event);

		return (
			<div className="logs">
				<a onClick={this.hideLogs}>Hide logs</a>
				<div className="info">It's just a demo version, so the max length of a document is 10.000 characters and only last 350 events are stored for redo/undo operations.</div>
				<div className="info">The code is not optimized so editing longer docuemnts is not recommended in this version.</div>
				<div className="info">Also, documents are removed automatically after 3 days of inactivity or server restart.</div>
				<div className="info">Displaying logs may slow down the editor (tho it's fun to watch :D)</div>
				<div className="separator" />
				<div className="info">10 latest events:</div>
				<div className="logs-list">
					{
						logs.map((event, key) => <Log key={key} value={event} />)
					}
				</div>
				<div className="separator" />
				<div className="info">{`Events in memory: ${this.props.history.length}`}</div>
			</div>
		);
	}

	renderHidden() {
		return (
			<div className="logs">
				<a onClick={this.showLogs}>Show logs</a>
			</div>
		);
	}

	render() {
		if (this.state.showLogs)
			return this.renderVisible();
		else
			return this.renderHidden();
	}
}