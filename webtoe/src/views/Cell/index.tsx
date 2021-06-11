import React, { useState } from 'react'

const style = {
	width: '50px',
	height: '50px',
};

const Cell = (props: any) => {
	const [cellValue, setCellValue] = useState('')

	function handleClick(value: string) {
		setCellValue(value)
		props.gameUpdate(props.id, value)
	}

	return (
		<div style={style}>
			<h1>{cellValue}</h1>
			<button onClick={handleClick.bind(this, 'x')}>X</button>
		</div>
	)
}

export default Cell