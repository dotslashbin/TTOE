import React, { useState } from 'react'
import Table from '../../Table'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Game = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [gameStarted, setGameStarted] = useState(false)

	const handleControlButton = () => {
		setGameStarted(!gameStarted)
	}
	
	return (
		<div>
			<div>	
				<h3>Controls</h3>
				<button onClick={handleControlButton}>Start / Reset</button>
			</div>
			<div>
				<h3>Board</h3>
				<Table/>
			</div>
		</div>
	)
}

export default Game