/* eslint-disable no-underscore-dangle */

class Board {
  constructor() {
    this._coordinatesToIndex = {
      '00': 0,
      '01': 1,
      '02': 2,
      '10': 3,
      '11': 4,
      '12': 5,
      '20': 6,
      '21': 7,
      '22': 8,
    };
    this._board = Array(9).fill(null);
    this._xIsNext = true;
  }

  print() {
    // print the current game board
  }

  clear() {
    // clear the game board
  }

  getCoordinatesToIndex(row, col) {
    return this._coordinatesToIndex[`${row}${col}`];
  }

  addMove(row, col) {
    if (this.allowsMove(row, col)) {
      const index = this.getCoordinatesToIndex(row, col);
      if (index !== undefined) {
        const copy = this._board.slice();
        const piece = this._xIsNext ? 'X' : 'O';
        copy[index] = piece;
        this._board = copy;
        this._xIsNext = !this._xIsNext;
      }
    }
  }

  allowsMove(row, col) {
    const index = this.getCoordinatesToIndex(row, col);
    return this._board[index] === null;
  }

  isFull() {
    return !this._board.includes(null);
  }

  calculateWinner() {}

  // hostGame() {}
}

module.exports = Board;
