import { configureStore } from '@reduxjs/toolkit';
import tictactoeReducer from '../features/tictactoe/tictactoeSlice';

export const store = configureStore({
  reducer: {
    tictactoe: tictactoeReducer,
  },
});
