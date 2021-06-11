import { MAX_BOX } from '../configs/app'

export default class AI {
	private getRandomIndex(): number {
		return Math.floor(Math.random() * MAX_BOX)
	}

	/**
	 * Simulates an AI making a move
	 * @param currentState
	 * @returns
	 */
	MakeMove(currentState: string[]): number | null {
		const randomIndex = this.getRandomIndex()

		for (var iterator = 0; iterator < MAX_BOX; iterator++) {
			if (currentState[randomIndex] !== 'x') {
				return randomIndex
			}
			continue
		}

		return null
	}
}
