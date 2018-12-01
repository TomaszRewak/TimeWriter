import React, { Component } from 'react';
import Line from './line';

export default class Lines extends Component {
	shouldComponentUpdate(nextProps) {
		return this.props.text !== nextProps.text;
	}	

	render() {
		var lines = this.props
			.text
			.split('\n')
			.map(line => <Line key={line.id} text={line} />);

		return (
			<div className="lines">
				{lines}
			</div>
		);
	}
}