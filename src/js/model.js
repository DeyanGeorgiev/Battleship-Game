import View from './view';
import {
	randomize
} from './helpers/heplerFns'


let ships = [{
		locations: [0, 0, 0, 0],
		hits: []
	},
	{
		locations: [0, 0, 0, 0],
		hits: []
	},
	{
		locations: [0, 0, 0, 0, 0],
		hits: []
	}
];

let shipLength = [4, 4, 5];
let boardSize = 10;
let numShips = 3;
let shipsSunk = 0;



export default class Model {


	static get ships() {
		return ships;
	}
	static get boardSize() {
		return boardSize
	}
	static get shipLength() {
		return shipLength
	}
	static get shipsSunk() {
		return shipsSunk
	}
	static get numShips() {
		return numShips
	}

	static fire(guess) {

		for (let i = 0; i < this.numShips; i++) {
			let ship = this.ships[i];
			let index = ship.locations.indexOf(guess);


			if (ship.hits[index] === "hit") {
				View.displayMessage("Already hit that location");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				View.displayHit(guess);
				View.displayMessage("HIT!");

				if (this.isSunk(ship)) {
					View.displayMessage("*** Sunk ***");
					shipsSunk++;
				}
				return true;
			}

		}


		View.displayMiss(guess);
		View.displayMessage("*** Miss ***");
		return false;
	}

	static isSunk(ship) {
		for (let i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}

		return true;
	}

	static generateShipLocations() {
		let locations;
		let index = 0;

		for (const iterator of this.shipLength) {

			do {
				locations = this.generateShip(iterator);
			} while (this.collision(locations));
			this.ships[index].locations = locations;
			index++;
		}
	}

	static generateShip(length) {
		let direction = randomize();


		let row, col;



		if (direction === 1) {
			row = randomize(this.boardSize);
			col = randomize(this.boardSize, length);
		} else {
			row = randomize(this.boardSize, length);
			col = randomize(this.boardSize);
		}

		let newShipLocations = [];

		for (let i = 0; i < length; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			}
			if (direction !== 1) {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	}

	static collision(locations) {
		for (let i = 0; i < this.numShips; i++) {
			let ship = this.ships[i];
			for (let j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
}