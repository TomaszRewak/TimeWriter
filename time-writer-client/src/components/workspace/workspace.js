import React, { Component } from 'react';
import Document from '../document/document';

export default class Workspace extends Component {
	constructor(props) {
		super(props);

		this.state = {
			documents: [
				{ id: 1, name: 'doc' }
			]
		};
	}

	componentDidMount() {
		// const documentId = this.props.match.params.documentId;
	}

	render() {
		return (
			<div>
				{this.state.documents.map(document =>
					<Document key={document.id} id={document.id} />
				)}
			</div>
		);
	}
}