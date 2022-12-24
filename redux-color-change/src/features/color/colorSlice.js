import { createSlice } from '@reduxjs/toolkit';

export const colorfulSlice = createSlice({
  name: 'color2',
  initialState: { value: 'red' },
  // The 'reducers' field is where you define reducers.  Duh.
  // Using 'reducers', Redux can autogenerate actions.
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    actionCyan: (state) => {
      state.value = 'cyan';
    },
    actionTomato: (state) => {
      state.value = 'tomato';
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    actionColor: (state, action) => {
      state.value = action.payload;
    },
  },
});


// generated actions
export const { actionCyan, actionTomato, actionColor } = colorfulSlice.actions;

// selector function:
//   selects a value from the state. 
export const selectColorific = (state) => state.color2.value;

// Selectors can also be defined inline where they're used.
// For example: 
//   `useSelector((state: RootState) => state.counter.value)`

// NOTE: colorfulSlice.reducers property of the colorfulSlice.
// However here we say colorfulSlice.reducer  (singular)
export default colorfulSlice.reducer;

// NOTE: in app/store.js, when we configureStore(), 
// store's reducer.color2 = colorReducer
