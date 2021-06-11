import React, { useEffect, useState } from 'react'
import Table from '../../Table'
import Judge from '../../../services/Judge'
import  AI from '../../../services/AI'

let initialgameState: any[] = []

const judge = new Judge()
const opponent = new AI()

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Game = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [gameStarted, setGameStarted] = useState(false)
	const [winnerText, setWinnerText] = useState('')
	const [gameState, setGameState] = useState(initialgameState)
	const handleControlButton = () => {
		setGameStarted(!gameStarted)
	}
	
	/**
	 * Calls to update the game/board state
	 * @param cellId 
	 * @param value 
	 */
	const updateGameState = (cellId: number, value: string) => {
		let updatedState = gameState
		const index = cellId - 1 
		updatedState[index] = value
		setGameState(updatedState)

		let opponentMove = opponent.MakeMove(updatedState)
		console.log(`opponent move: ${opponentMove}`)

		let result = judge.GetWinner(gameState)
		if(result) {
			setWinnerText(`${result} WINS!`)
		}
	}

	useEffect(() => {
		console.log('effect is happening')
	}, [gameState])

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
			<div>
				<h1>{winnerText}</h1>
			</div>
		</div>
	)
}

export default Game