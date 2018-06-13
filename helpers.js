const { get } = require('prompt');

const getCoordinatesAndPlacePiece = board =>
  new Promise((resolve, reject) => {
    get(['coordinates'], (error, result) => {
      if (error) {
        reject(error);
      } else {
        const row = result.coordinates[0];
        const col = result.coordinates[1];
        if (board.allowsMove(row, col)) {
          board.addMove(row, col);
        }
        resolve();
      }
    });
  });

const printNextPlayer = xIsNext => {
  if (xIsNext) {
    return `\nPlayer X make your move!\n`;
  }
  return `\nPlayer O make your move!\n`;
};

const printWinner = winner => `\nPlayer ${winner} wins!\n`;

module.exports = {
  getCoordinatesAndPlacePiece,
  printNextPlayer,
  printWinner,
};
