/* eslint-disable no-undef */
/* eslint-disable  */
const Board = require('../Board');

describe(`Board's constructor`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should initialize an empty game board.`, () => {
    const emptyBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(board._board).toEqual(emptyBoard);
  });

  test(`should initialize xIsNext to true.`, () => {
    expect(board._xIsNext).toBe(true);
  });
});

describe(`Board's addMove method`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should place an X on the first move.`, () => {
    board.addMove(0, 1);
    expect(board._board[0][1]).toBe('X');
  });

  test(`should place an O on the second move.`, () => {
    board.addMove(1, 1);
    expect(board._board[1][1]).toBe('O');
  });

  test(`should place an X on the third move.`, () => {
    board.addMove(2, 1);
    expect(board._board[2][1]).toBe('X');
  });

  test(`should only place a piece if the location does not already have a piece placed.`, () => {
    board.addMove(2, 1);
    expect(board._board[2][1]).toBe('X');
  });

  test(`should place the correct piece after attempting to place a piece in an already occupied location`, () => {
    board.addMove(2, 2);
    expect(board._board[2][2]).toBe('O');
  });
});

describe(`Board's allowsMove method`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should return true if player is allowed to make a move at the input location.`, () => {
    expect(board.allowsMove(0, 1)).toBe(true);
  });

  test(`should return false if player is not allowed to make a move at the input location.`, () => {
    board.addMove(0, 1);
    expect(board.allowsMove(0, 1)).toBe(false);
  });
});
