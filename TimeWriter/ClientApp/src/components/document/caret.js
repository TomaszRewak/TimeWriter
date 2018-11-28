import React from 'react';

const caretColors = [
	'red',
	'blue',
	'green',
	'orange'
];

export default function Caret(props) {
	const style = {
		left: `${props.caret.begin.column}00%`,
		top: `${props.caret.begin.line}00%`,
		backgroundColor: caretColors[props.caret.owner % caretColors.length]
	};

	return <div style={style} className="caret"/>;
}