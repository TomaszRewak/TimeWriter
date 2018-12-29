import React, { Component } from 'react';

export default class WorkspaceItem extends Component {
	constructor() {
		super();

		this.select = this.select.bind(this);
		this.close = this.close.bind(this);
	}

	select() {
		this.props.onSelect(this.props.name);
	}

	close() {
		this.props.onClose(this.props.name);
	}

	render() {
		let className = 'workspace-item';

		if (this.props.isSelected)
			className = `${className} selected`;

		return (
			<div className={className}>
				<div className='select-button' onClick={this.select}>{this.props.name}</div>
				<div className='close-button' onClick={this.close}>ꭗ</div>
			</div>
		);
	}
}