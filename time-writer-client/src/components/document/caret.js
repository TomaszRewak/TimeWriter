import React from 'react';

const caretColors = [
	'red',
	'blue',
	'green',
	'orange'
];

export default function Caret(props) {
	const style = {
		left: `${props.column}00%`,
		top: `${props.line}00%`,
		backgroundColor: caretColors[props.owner % caretColors.length]
	};

	return <div style={style} className="caret"/>;
}