import { configureStore } from '@reduxjs/toolkit';
import weeksReducer from '../slices/weekSlice';

const store = configureStore({
  reducer: {
    weeks: weeksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
