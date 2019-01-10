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
		this.setState({showLogs: true});
	}

	hideLogs() {
		this.setState({showLogs: false});
	}

	renderVisible() {
		const logs = this.props.history.slice(0, 5).map(n => n.event);

		return (
			<div className="logs">
				<a onClick={this.hideLogs}>Hide logs</a>
				<div className="info">Displaying logs may slow down the editor.</div>
				<div className="info">Even tho it's slow either way :D</div>
				{
					logs.map((event, key) => <Log key={key} value={event} />)
				}
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