import React, { Component } from 'react';
import Caret from './caret';

export default class Line extends Component {
	render() {
		return (
			<div className="line">
				<div className="line-number">{this.props.number}</div>
				<div className="line-content">{this.props.text}</div>
			</div>
		);
	}
}