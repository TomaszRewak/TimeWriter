import './_.css'

import React, { Component } from 'react';
import Document from '../document/document';
import WorkspaceBar from './workspace-bar';
import NewFile from './new-file';

export default class Workspace extends Component {
	constructor(props) {
		super(props);

		const documents = this.getDocumentsFromParams();

		this.state = {
			documents,
			selectedDocument: documents[0]
		};

		this.select = this.select.bind(this);
		this.close = this.close.bind(this);
		this.add = this.add.bind(this);
	}

	getDocumentsFromParams() {
		const urlParams = new URLSearchParams(window.location.search);
		const documents = urlParams.getAll('document');

		if (!documents.length)
			return ['lobby.js', 'test.js'];
		else
			return documents;
	}

	close(name) {
		this.setState(state => {
			const documents = state.documents.filter(document => document != name);
			const selectedDocument =
				state.selectedDocument !== name
				? state.selectedDocument
				: documents[0];

			return {
				documents,
				selectedDocument
			}
		});
	}

	select(name) {
		this.setState({
			selectedDocument: name
		});
	}

	add(name) {
		this.setState(state => ({
			documents: [...state.documents, name],
			selectedDocument: name
		}));
	}

	render() {
		let workspaceClassName = 'workspace';

		if (this.state.showFileCreator)
			workspaceClassName = `${workspaceClassName} blurred`;

		return (
			<div className='workspace-container'>
				{this.state.showFileCreator && <NewFile onCancel={this.hideFileCreator} />}
				<div className={workspaceClassName}>
					<WorkspaceBar
						documents={this.state.documents}
						selectedDocument={this.state.selectedDocument}
						onSelect={this.select}
						onClose={this.close}
						onAdd={this.add} />
					<Document key={this.state.selectedDocument} id={this.state.selectedDocument} />
				</div>
			</div>
		);
	}
}