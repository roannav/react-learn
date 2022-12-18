import { configureStore } from '@reduxjs/toolkit';

// in welcomeSlice, we did 'export default welcomeSlice.reducer'
// The name of the slice is 'welcome'
import welcomeReducer from '../features/welcome/welcomeSlice';

export const store = configureStore({
  reducer: {
    welcome: welcomeReducer,
  },
});
