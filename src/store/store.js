// store.js
import { configureStore } from '@reduxjs/toolkit';
import genreReducer from './genreSlice.js';
import booksReducer from './booksSlice.js';
import readingListReducer from './readingListSlice.js';

export default configureStore({
  reducer: {
    genre: genreReducer,
    books: booksReducer,
    readingList: readingListReducer,
  },
});