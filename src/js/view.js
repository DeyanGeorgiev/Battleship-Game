import {
	getElementId
} from './helpers/heplerFns';

export default class View {

	static displayMessage(msg) {
		getElementId("messageArea").innerHTML = msg;
	}

	static displayHit(location) {
		getElementId(location).innerHTML = "X";
	}

	static displayMiss(location) {
		getElementId(location).innerHTML = "-";
	}

	static displayAll(location) {

		for (let index = 0; index < location.length; index++) {
			getElementId(location[index]).innerHTML = "X";
		};

		getElementId('guessInput').disabled = true;
	}
};