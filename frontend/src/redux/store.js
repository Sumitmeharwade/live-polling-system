import { configureStore } from '@reduxjs/toolkit';
import pollReducer from './pollSlice';
import roleReducer from './roleSlice';

export const store = configureStore({
  reducer: {
    polls: pollReducer,
    role: roleReducer,
  },
});
