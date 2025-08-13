import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import counterReducer from './slices/counter.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // add more slices here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
