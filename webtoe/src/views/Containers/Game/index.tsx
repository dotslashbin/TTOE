import React, { useState } from 'react'
import Table from '../../Table'

import { calculateWinner } from '../../../utilities/Judge'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Game = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [gameStarted, setGameStarted] = useState(false)
	const [gameState, setGameState] = useState([])

	const handleControlButton = () => {
		setGameStarted(!gameStarted)
	}

	const updateGameState = (cellId: number, value: string) => {
		console.log(cellId, value)
	}

	return (
		<div>
			<div>	
				<h3>Controls</h3>
				<button onClick={handleControlButton}>Start / Reset</button>
			</div>
			<div>
				<p>Click on "X" to place a mark. (Yes, you will always be "X")</p>
				<Table gameUpdate={updateGameState} />
			</div>
		</div>
	)
}

export default Game