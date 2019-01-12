import React, { Component } from 'react';
import WorkspaceItem from './workspace-item';
import NewFile from './new-file';

export default class WorkspaceBar extends Component {
	render() {
		return (
			<div className='workspace-bar'>
				<div className='workspace-bar-items'>
					{
						this.props.documents.map(document =>
							<WorkspaceItem
								key={document}
								name={document}
								isSelected={document === this.props.selectedDocument}
								onClose={this.props.onClose}
								onSelect={this.props.onSelect}
								canClose={this.props.documents.length > 1} />
						)
					}
					<NewFile onAdd={this.props.onAdd} />
				</div>
				<div className='workspace-bar-info'>
					<a href="https://github.com/TomaszRewak/TimeWriter" target="_blank">github</a>
					<a href="https://www.linkedin.com/in/tomaszrewak/" target="_blank">linkedIn</a>
					<div className="me">
						ⓘ
						<div className="me-popup">
							<p>By Tomasz Rewak</p>
							<img src="me.png" title="ale fruwa" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}