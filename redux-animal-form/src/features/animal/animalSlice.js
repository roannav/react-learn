import { createSlice } from '@reduxjs/toolkit';

export const animalSlice = createSlice({
  name: 'animal',
  initialState: { value: 'lizard' },
  reducers: {
    turnIntoWolf: (state) => {
      state.value = 'wolf';
    },
    makeItCute: (state) => {
      state.value += 'ito';
    },
    switcheroo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// generated actions
export const { turnIntoWolf, makeItCute, switcheroo } = animalSlice.actions;

// selector function:
//   selects a value from the state. 
export const selectName  = (state) => state.animal.value;

// Selectors can also be defined inline where they're used.
// For example: 
//   `useSelector((state: RootState) => state.counter.value)`

// NOTE: animal.reducers property of the animalSlice.
// However here we say animalSlice.reducer  (singular)
export default animalSlice.reducer;

// NOTE: in app/store.js, when we configureStore(),
// store's reducer.animal = animalReducer
// import animalReducer from '../features/animal/animalSlice';
