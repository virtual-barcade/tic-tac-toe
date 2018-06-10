class Board {
  constructor() {
    // initialize board state
  }

  print() {
    // print the current game board
  }

  clear() {
    // clear the game board
  }

  addMove(row, col) {
    // place either an X or an O
  }

  allowsMove(row, col) {
    // check to see if a piece hasn't already been placed on board
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
