/* eslint-disable no-underscore-dangle */

class Board {
  constructor() {
    const row = Array(3).fill(null);
    this._board = [row.slice(), row.slice(), row.slice()];
    this._xIsNext = true;
  }

  print() {
    // print the current game board
  }

  clear() {
    // clear the game board
  }

  addMove(row, col) {
    if (this.allowsMove(row, col)) {
      const copy = this._board.map(pieces => pieces.slice());
      const piece = this._xIsNext ? 'X' : 'O';
      copy[row][col] = piece;
      this._board = copy;
      this._xIsNext = !this._xIsNext;
    }
  }

  allowsMove(row, col) {
    return this._board[row][col] === null;
  }

  isFull() {
    // check if game board is full
  }

  calculateWinner() {
    // determine if person who just placed a piece has won the game
  }

  hostGame() {
    // host a game of tic tac toe
  }
}

module.exports = Board;
