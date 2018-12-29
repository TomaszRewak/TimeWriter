import React, { Component } from 'react';
import WorkspaceItem from './workspace-item';
import NewFile from './new-file';

export default class WorkspaceBar extends Component {
	render() {
		return (
			<div className='workspace-bar'>
				{
					this.props.documents.map(document =>
						<WorkspaceItem
							key={document}
							name={document}
							isSelected={document === this.props.selectedDocument}
							onClose={this.props.onClose}
							onSelect={this.props.onSelect} />
					)
				}
				<NewFile onAdd={this.props.onAdd}/>
			</div>
		);
	}
}