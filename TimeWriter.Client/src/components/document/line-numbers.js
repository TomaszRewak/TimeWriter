import React, { Component } from 'react';
import TextNavigationService from '../../services/text-navigation-service';

export default class LineNumbers extends Component {
	constructor() {
		super();

		this.textNavigationService = new TextNavigationService();
	}

	render() {
		const lineNumber = this.textNavigationService.countLines(this.props.text);
		const numbers = [...Array(lineNumber).keys()]
			.map(i => i + 1)
			.map(number => <div key={number} className="line-number">{number}</div>);

		return (
			<div className="line-numbers">
				{numbers}
			</div>
		);
	}
}