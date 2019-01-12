const sampleText = `import React, {Component} from 'react';

export default class MyComponent extends Component {
	constructor(props) {
		super(props);

		this.click = this.click.bind(this);
	}

	click() {
		console.log('Hello world');
	}

	render() {
		return (
			<div click={this.click}>
				Click me
			</div>
		);
	}
}`;

export { sampleText };