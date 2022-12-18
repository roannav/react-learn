import { createSlice } from '@reduxjs/toolkit';

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState: { value: 'none' },
  // The `reducers` field lets us define reducers and 
  // generate associated actions
  reducers: {
    changeNameToMary: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = 'Mary';
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// generated actions
export const { changeNameToMary, changeName } = welcomeSlice.actions;

// selector function:
//   selects a value from the state. 
export const selectName  = (state) => state.welcome.value;

// Selectors can also be defined inline where they're used.
// For example: 
//   `useSelector((state: RootState) => state.counter.value)`

// NOTE: welcomeSlice.reducers property
// However here we say welcomeSlice.reducer  (singular)
export default welcomeSlice.reducer;
