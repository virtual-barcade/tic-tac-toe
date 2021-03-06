/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

const Board = require('../Board');

describe(`Board's constructor`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should initialize a dictionary that pairs coordinates with an index in the board.`, () => {
    const coordinatesToIndex = {
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
    expect(board._coordinatesToIndex).toEqual(coordinatesToIndex);
  });

  test(`should initialize an empty game board.`, () => {
    const emptyBoard = [null, null, null, null, null, null, null, null, null];
    expect(board._board).toEqual(emptyBoard);
  });

  test(`should initialize xIsNext to true.`, () => {
    expect(board._xIsNext).toBe(true);
  });
});

describe(`Board's print method`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should return a string representing an empty game board when no pieces have been placed.`, () => {
    const emptyBoard =
      '      0   1   2\n  0 | - | - | - |\n  1 | - | - | - |\n  2 | - | - | - |\n';
    const currentBoard = board.print();
    expect(currentBoard).toBe(emptyBoard);
  });

  test(`should return a string representing a game board with pieces in the correct position after they are placed.`, () => {
    board.addMove(1, 0);
    board.addMove(0, 0);
    board.addMove(1, 1);
    board.addMove(0, 1);
    board.addMove(1, 2);
    const expectedBoard =
      '      0   1   2\n  0 | O | O | - |\n  1 | X | X | X |\n  2 | - | - | - |\n';
    const currentBoard = board.print();
    expect(currentBoard).toBe(expectedBoard);
  });
});

describe(`Board's clear method`, () => {
  test(`should create a new empty board and set it as program state.`, () => {
    const board = new Board();
    board.addMove(1, 0);
    board.addMove(0, 0);
    board.addMove(1, 1);
    const oldBoard = board._board;
    board.clear();
    const newBoard = board._board;
    expect(newBoard).not.toBe(oldBoard);
  });
});

describe(`Board's addMove method`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should place an X on the first move.`, () => {
    board.addMove(0, 1);
    expect(board._board[1]).toBe('X');
  });

  test(`should place an O on the second move.`, () => {
    board.addMove(1, 1);
    expect(board._board[4]).toBe('O');
  });

  test(`should place an X on the third move.`, () => {
    board.addMove(2, 1);
    expect(board._board[7]).toBe('X');
  });

  /* potentially move logic of checking if valid move to hostGame method */

  // test(`should only place a piece if the location does not already have a piece placed.`, () => {
  //   board.addMove(2, 1);
  //   expect(board._board[7]).toBe('X');
  // });

  // test(`should place the correct piece after attempting to place a piece in an already occupied location`, () => {
  //   board.addMove(2, 2);
  //   expect(board._board[8]).toBe('O');
  // });
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

describe(`Board's isFull method`, () => {
  let board;

  beforeAll(() => {
    board = new Board();
  });

  test(`should return false if the board is not full.`, () => {
    expect(board.isFull()).toBe(false);
  });

  test(`should return true if the board is full.`, () => {
    board.addMove(0, 0);
    board.addMove(0, 1);
    board.addMove(0, 2);
    board.addMove(1, 0);
    board.addMove(1, 1);
    board.addMove(1, 2);
    board.addMove(2, 0);
    board.addMove(2, 1);
    board.addMove(2, 2);
    expect(board.isFull()).toBe(true);
  });
});

describe(`Board's calculateWinner method`, () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test(`should return 'X' if the winner is 'X'.`, () => {
    board.addMove(1, 0);
    board.addMove(0, 0);
    board.addMove(1, 1);
    board.addMove(0, 1);
    board.addMove(1, 2);
    expect(board.calculateWinner()).toBe('X');
  });

  test(`should return 'O' if the winner is 'O'.`, () => {
    board.addMove(0, 0);
    board.addMove(1, 0);
    board.addMove(0, 2);
    board.addMove(1, 1);
    board.addMove(2, 2);
    board.addMove(1, 2);
    expect(board.calculateWinner()).toBe('O');
  });

  test(`should return null if there is no winner.`, () => {
    board.addMove(0, 0);
    board.addMove(1, 0);
    board.addMove(0, 2);
    expect(board.calculateWinner()).toBe(null);
  });
});
