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
    const pieces = this._board.map(piece => {
      if (piece === null) {
        return '-';
      }
      return piece;
    });
    let piecesToString = '\n    0   1   2\n';
    let rowEntryCounter = 0;
    let rowCounter = 0;
    pieces.forEach(piece => {
      if (rowEntryCounter === 0) {
        piecesToString += `${rowCounter} | ${piece} |`;
      } else {
        piecesToString += ` ${piece} |`;
      }
      rowEntryCounter += 1;
      if (rowEntryCounter === 3) {
        rowEntryCounter = 0;
        rowCounter += 1;
        piecesToString += '\n';
      }
    });
    return piecesToString;
  }

  clear() {
    this._board = Array(9).fill(null);
    this._xIsNext = true;
  }

  getCoordinatesToIndex(row, col) {
    return this._coordinatesToIndex[`${row}${col}`];
  }

  addMove(row, col) {
    // if (this.allowsMove(row, col)) {
    const index = this.getCoordinatesToIndex(row, col);
    if (index !== undefined) {
      const copy = this._board.slice();
      const piece = this._xIsNext ? 'X' : 'O';
      copy[index] = piece;
      this._board = copy;
      this._xIsNext = !this._xIsNext;
    }
    // }
  }

  allowsMove(row, col) {
    const index = this.getCoordinatesToIndex(row, col);
    return this._board[index] === null;
  }

  isFull() {
    return !this._board.includes(null);
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (
        this._board[a] &&
        this._board[a] === this._board[b] &&
        this._board[a] === this._board[c]
      ) {
        return this._board[a];
      }
    }
    return null;
  }

  // hostGame() {}
}

module.exports = Board;
