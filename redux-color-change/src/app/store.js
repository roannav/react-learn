import { configureStore } from '@reduxjs/toolkit';

// in colorSlice, we did 'export default colorSlice.reducer'
//  The name of the slice is 'color'
import colorReducer from '../features/color/colorSlice';

export const store = configureStore({
  reducer: {
    color2: colorReducer,
  },
});
