import React, { useState } from 'react'

const style = {
	width: '50px',
	height: '50px',
};

const Cell = () => {
	const [cellValue, setCellValue] = useState('')

	function handleClick(value: string) {
		setCellValue(value)
	}

	return (
		<div style={style}>
			<h1>{cellValue}</h1>
			<button onClick={handleClick.bind(this, 'x')}>X</button>
			<button onClick={handleClick.bind(this, 'o')}>0</button>
		</div>
	)
}

export default Cell