import React, { Component } from 'react';
import Caret from './caret';
import TextFormattingHelper from './helpers/text-formatting-helper';

export default class Line extends Component {
	shouldComponentUpdate(nextProps) {
		return this.props.text !== nextProps.text;
	}

	prepareText() {
		return TextFormattingHelper
			.applyFormattingRules(this.props.text)
			.map((fragmet, index) =>
				<span key={index} className={`text-fragment-${fragmet.type}`}>
					{fragmet.text}
				</span>);
	}

	render() {
		const text = this.prepareText()

		return (
			<div className="line">
				{text}
			</div>
		);
	}
}