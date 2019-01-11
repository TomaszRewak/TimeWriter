import React, { Component } from 'react';
import TextFormattingHelper from './helpers/text-formatting-helper';

export default class Line extends Component {
	constructor(props) {
		super(props);

		this._textFormattingHelper = new TextFormattingHelper();
	}

	shouldComponentUpdate(nextProps) {
		return this.props.text !== nextProps.text;
	}

	prepareText() {
		return this._textFormattingHelper
			.applyFormattingRules(this.props.text)
			.map((fragmet, index) =>
				<span key={index} className={`text-fragment-${fragmet.type}`} style={{width: `${fragmet.width}ch`}}>
					{fragmet.text}
				</span>);
	}

	render() {
		const text = this.prepareText();

		return (
			<div className="line">
				{text}
			</div>
		);
	}
}