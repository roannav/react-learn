import { configureStore } from '@reduxjs/toolkit';

// in colorSlice, we did 'export default colorfulSlice.reducer'
//  The name of the slice is 'color'
import colorDReducer from '../features/color/colorSlice';

export const store = configureStore({
  reducer: {
    color2: colorDReducer,
  },
});
// This is where the state variable (ie state.color2) is defined...
// in the store's reducer object.
