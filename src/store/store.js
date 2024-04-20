
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../store/booksSlice.js';

export default configureStore({
  reducer: {
    books: booksReducer,
  },                                    
});


