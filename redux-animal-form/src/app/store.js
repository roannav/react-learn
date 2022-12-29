import { configureStore } from '@reduxjs/toolkit';

// in animalSlice, we exported animalSlice.reducer
// The name of the slice is 'animal'.
import animalReducer from '../features/animal/animalSlice';

export const store = configureStore({
  reducer: {
    animal: animalReducer,
  },
});
// This is where the state variable name (ie state.animal) is defined... 
// in the store's reducer object
