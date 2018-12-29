import React, { Component } from 'react';

export default class NewFile extends Component {
	constructor(props) {
		super(props);

		this.state = { fileName: '' };

		this.fileNameChanged = this.fileNameChanged.bind(this);
		this.submit = this.submit.bind(this);
	}

	fileNameChanged(event) {
		this.setState({
			fileName: event.target.value
		});
	}

	submit(event) {
		this.props.onAdd(this.state.fileName);

		this.setState({ fileName: '' });

		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.submit} className='workspace-item new'>
				<input className='file-name-input' value={this.state.fileName} onChange={this.fileNameChanged} />
				<input type='submit' value='＋' />
			</form>
		);
	}
}