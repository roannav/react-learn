import { createSlice } from '@reduxjs/toolkit';

export const colorfulSlice = createSlice({
  name: 'color_slice_name',

  initialState: { value: 'red' },

  // The 'reducers' field is where you define reducers.  Duh.
  // Using 'reducers', Redux can autogenerate actions.
  reducers: {
    // With Redux Toolkit, we can write "mutating" logic in our reducers.
    // But the state is NOT really mutated!
    // Behind the scenes, Redux Toolkit uses the Immer library,
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
    // Shortcut: The actual state is state.color2.value,
    // yet above, we refer to state.value
  },
});


// generated actions
export const { actionCyan, actionTomato, actionColor } = colorfulSlice.actions;
console.log("An autogenerated action generator function, derived from a reducer function in the slice.");
console.log(colorfulSlice.actions.actionCyan());

// selector function:
//   selects a value from the state. 
export const selectColorific = (state) => state.color2.value;

// Selectors can also be defined inline where they're used.
// For example: 
//   `useSelector((state: RootState) => state.counter.value)`

// NOTE: The state variable doesn't come from  the name of the slice.
// Rather, the state variable is defined in App.js' store's reducer object.

// Inside the slice, we define the 'reducers', while Redux auto-generates
// the 'reducer'. 
// We defined the colorfulSlice.reducers property of the colorfulSlice.
// However below we say colorfulSlice.reducer  (singular)
export default colorfulSlice.reducer;

// Here, we export default colorfulSlice.reducer.
// But in app/store.js we can...
// import colorDReducer from '../features/color/colorSlice';
// So even though the name of the reducer has changed, it still works!

// In app/store.js, when we configureStore(),
// store's reducer property is set...
//   reducer: {
//     color2: colorDReducer,
//   },