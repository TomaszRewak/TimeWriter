import React, { Component } from 'react';
import Data from './data';

export default class Log extends Component {
	render() {
		const className =
			!this.props.value.author
				? "log own"
				: "log";

		return (
			<div className={className}>
				<Data value={this.props.value} />
			</div>
		);
	}
}