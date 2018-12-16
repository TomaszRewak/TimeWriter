import React, { Component } from 'react';

const caretColors = [
	'red',
	'#3390ec',
	'green',
	'orange'
];

export default class Caret extends Component {
	isOwn() {
		return this.props.owner == null;
	}

	getColor() {
		if (this.isOwn())
			return 'white';

		const hash = this.props.owner.charCodeAt(0);

		return caretColors[hash % caretColors.length]
	}

	render() {
		const style = {
			left: `${this.props.column}00%`,
			top: `${this.props.line}00%`,
			backgroundColor: this.getColor(),
			zIndex: this.isOwn() ? 1 : 0
		};

		return <div style={style} className="caret" />;
	}
}