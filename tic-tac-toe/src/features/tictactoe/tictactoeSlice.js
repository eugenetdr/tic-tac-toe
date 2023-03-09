import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: true,
  board: [
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ],
  winner: null,
};

export const tictactoeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    makeAMove: (state, action) => {
      const {rowIndex, colIndex} = action.payload
      switch (state.player) {
        case true:
          state.board[rowIndex][colIndex] = 1;
          break;
        case false:
          state.board[rowIndex][colIndex] = -1;
          break;
      };
      state.player = !state.player;
    },
    reset: (state) => {
      state.player = true;
      state.board = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ];
    },
    updateWinner: (state, action) => {
      console.log(action)
      state.winner = action.payload;
    },
  },
});

export const { makeAMove, reset, updateWinner } = tictactoeSlice.actions;
export const selectBoard = (state) => state.tictactoe.board;

export default tictactoeSlice.reducer;
