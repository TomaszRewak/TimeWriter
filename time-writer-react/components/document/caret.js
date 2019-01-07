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

	prepareRange(range, i) {
		const style = {
			left: `${range.column}00%`,
			top: `${range.line}00%`,
			width: `${range.length}00%`,
			backgroundColor: this.getColor(),
			zIndex: this.isOwn() ? 1 : 0
		};

		return <div style={style} className="caret-range"></div>
	}

	prepareRanges() {
		return this.props.ranges.map((range, i) => this.prepareRange(range, i));
	}

	render() {
		const style = {
			zIndex: this.isOwn() ? 1 : 0
		};

		return (
			<div style={style} className="caret">
				{this.prepareRanges()}
			</div>
		);
	}
}