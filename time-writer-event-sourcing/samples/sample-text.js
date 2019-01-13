const sampleText = `import React, {Component} from 'react';

export default class MyComponent extends Component {
	constructor(props) {
		super(props);
\t\t
		this.click = this.click.bind(this);
	}
\t
	click() {
		console.log('Hello world');
	}
\t
	render() {
		return (
			<div click={this.click}>
				Click me
			</div>
		);
	}
}`;

export { sampleText };