import React, { Component } from 'react';
import Caret from './caret';
import { TextNavigationService } from '../../external/event-sourcing';

export default class Carets extends Component {
	constructor() {
		super();

		this.textNavigationService = new TextNavigationService();
	}

	render() {
		const carets = this.props
			.document
			.carets
			.map(caret => ({
				...caret,
				...this.textNavigationService.getCaretCoordinates(this.props.document.text, caret.position)
			}))
			.map(caret => <Caret key={caret.id} id={caret.id} owner={caret.owner} line={caret.line} column={caret.column} />);

		return (
			<div className="carets">
				_
				{carets}
			</div>
		);
	}
}