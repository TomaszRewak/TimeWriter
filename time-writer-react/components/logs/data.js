import React, { Component } from 'react';

export default class Data extends Component {
	renderValue() {
		if (typeof this.props.value === 'string' || this.props.value instanceof String)
			return <div className="value string">{`"${this.props.value}"`}</div>
		else
			return <div className="value number">{this.props.value}</div>

	}

	renderObject() {
		let parameters = [];

		for (const key in this.props.value)
			parameters.push(
				<div key={key} className="parameter">
					<div className="key">{`"${key}"`}</div>
					<div className="colon">:</div>
					<Data value={this.props.value[key]} />
				</div>
			);

		return (
			<div className="object">
				<div children="{" className="bracket" />
				<div className="values">
					{parameters}
				</div>
				<div children="}" className="bracket" />
			</div>
		)
	}

	render() {
		if (typeof this.props.value === 'object')
			return this.renderObject();
		else
			return this.renderValue();
	}
}