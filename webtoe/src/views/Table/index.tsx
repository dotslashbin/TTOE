/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Cell from '../Cell'

const style = {
	border: '4px solid black',
	width: '250px',
	height: '250px',
	margin: '0 auto',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};


const Table = () => {

	const cellCounter = Array.from({length:9},(v,k)=>k+1)

	return (
		<div style={style}>
			{cellCounter.map((key, value) =>(<Cell />))}
		</div>
	)
}

export default Table