import React, { useState } from 'react'
import Table from '../../Table'

import Judge from '../../../services/Judge'

let initialgameState: any[] = []

const judge = new Judge()

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Game = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [gameStarted, setGameStarted] = useState(false)

	const [gameState, setGameState] = useState(initialgameState)
	const handleControlButton = () => {
		setGameStarted(!gameStarted)
	}

	const updateGameState = (cellId: number, value: string) => {
		let updatedState = gameState
		const index = cellId - 1 
		updatedState[index] = value
		setGameState(updatedState)

		let result = judge.GetWinner(gameState)
		if(result) {
			alert(result)
		}
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