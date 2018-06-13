const WELCOME_MESSAGE = `Welcome to Tic Tac Toe!

Below you can see the empty game board. Please find a second player
and decide amongst yourselves who will be Player X and Player O.

Player X begins. 

In order to enter a move, you must give the coordinates
where you wish to place your piece. Both the x and y coordinates must be between
0 and 2.

When you are prompted for the coordinates, enter both the x and y coordinates as one number.

For example:
  - If you wish to place your piece in the top left you would enter: 00.
  - If you wish to place your piece in the middle you would enter: 11.
  - If you wish to place your piece in the bottom left you would enter: 20.
`;

const DELIMITER = `--------------------------------------------------
`;

const GAME_OVER = `Tie game! Feel free to play again.
`;

module.exports = {
  WELCOME_MESSAGE,
  DELIMITER,
  GAME_OVER,
};
