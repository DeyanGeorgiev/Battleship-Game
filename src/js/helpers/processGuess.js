import parseGuess from './parseGuess';
import Model from './../model';
import View from './../view';




export default function processGuess(guess) {

	let guesses = 0;

	let location = parseGuess(guess);

	if (guess === 'SHOW') {

		View.displayAll(location);
		View.displayMessage("Game over!")

	}

	if (location && guess !== 'SHOW') {
		guesses++;
		let hit = Model.fire(location);
		if (hit && Model.shipsSunk === Model.numShips) {
			View.displayMessage("Well done! You completed the game in " + guesses + " shots");
		}
	}
};