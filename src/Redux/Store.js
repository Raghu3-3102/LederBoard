import { configureStore } from '@reduxjs/toolkit';
import raceReducer from './Slice';

const store = configureStore({
  reducer: {
    race: raceReducer,
  },
});

export default store;
