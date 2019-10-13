import Model from './../model';

export default function parseGuess(guess) {
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

	if (guess === "SHOW") {

		let arr = []

		Model.ships.forEach(el => el.locations.forEach(exact => arr.push(exact)));

		return arr;

	}


	if (guess === null || guess.length !== 2) {


		alert("Please enter a letter and a number on the board.");
	} else {
		let firstChar = guess.charAt(0);
		let row = alphabet.indexOf(firstChar);
		let column = guess.charAt(1);
		if (isNaN(row) || isNaN(column)) {
			alert("That isn't on the board.");
		} else if (row < 0 || row >= Model.boardSize || column < 0 || column >= Model.boardSize) {
			alert("That's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}