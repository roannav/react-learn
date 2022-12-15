import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//  https://react-redux.js.org/tutorials/quick-start
// sample code shows this alternate way to 
// automatically create a 'store' variable.
export default configureStore({
//export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
