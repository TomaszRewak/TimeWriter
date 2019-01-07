import React, { Component } from 'react';
import Caret from './caret';
import { TextNavigationService } from '../../external/event-sourcing';

export default class Carets extends Component {
	constructor() {
		super();

		this.textNavigationService = new TextNavigationService();
	}

	_getCaretRanges(caret) {
		const ranges = [];

		const beginCoordinates = this.textNavigationService.getCaretCoordinates(this.props.text, caret.beginPosition);
		const endCoordinates = this.textNavigationService.getCaretCoordinates(this.props.text, caret.endPosition);

		let { line, column } = beginCoordinates;

		let position = caret.beginPosition;
		while (position <= caret.endPosition) {
			const endOfLinePosition = this.textNavigationService.getEndOfLinePosition(this.props.text, position);
			const endOfLineColumn = this.textNavigationService.getEndOfLineColumn(this.props.text, position);

			if (endOfLinePosition < caret.endPosition)
				ranges.push({ line, column, length: endOfLineColumn - column });
			else
				ranges.push({ line, column, length: endCoordinates.column - column });

			line = line + 1;
			column = 0;

			position = endOfLinePosition + 1;
		}

		return ranges;
	}

	_prepareCaret(caret, i) {
		const ranges = this._getCaretRanges(caret);

		return <Caret key={i} owner={caret.owner} ranges={ranges} />
	}

	_prepareCarets() {
		return this.props
			.carets
			.map(this._prepareCaret.bind(this));
	}

	render() {
		const carets = this._prepareCarets();

		return (
			<div className="carets">
				{carets}
			</div>
		);
	}
}