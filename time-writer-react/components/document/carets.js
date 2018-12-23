import React, { Component } from 'react';
import Caret from './caret';
import { TextNavigationService } from '../../external/event-sourcing';

export default class Carets extends Component {
	constructor() {
		super();

		this.textNavigationService = new TextNavigationService();
	}

	prepareCarets() {
		return this.props
			.document
			.carets
			.map(caret => ({
				...caret,
				...this.textNavigationService.getCaretCoordinates(this.props.document.text, caret.position)
			}))
			.map((caret, i) => <Caret key={i} owner={caret.owner} line={caret.line} column={caret.column} />);
	}

	render() {
		const carets = this.prepareCarets();

		return (
			<div className="carets">
				{carets}
			</div>
		);
	}
}