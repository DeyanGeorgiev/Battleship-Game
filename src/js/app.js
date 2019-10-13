import '../css/main.scss';
import Model from './model';
import processGuess from './helpers/processGuess';
import {
	getElementId
} from './helpers/heplerFns';



let handleFireButton = () => {
	const guess = getElementId("guessInput").value.toUpperCase();
	processGuess(guess);
	getElementId("guessInput").value = "";
}

let handleKeyPress = (e) => {

	e = e || window.event;
	if (e.keyCode === 13) {
		getElementId("fireButton").click();
		return false;
	}
}


window.onload = init;

function init() {

	getElementId("fireButton").onclick = handleFireButton;
	getElementId("guessInput").onkeypress = handleKeyPress;

	Model.generateShipLocations();
}