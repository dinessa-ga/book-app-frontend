// store.js
import { configureStore } from '@reduxjs/toolkit';
import genreReducer from './genreSlice';
import booksReducer from './booksSlice';
import readingListReducer from './readingListSlice';

export default configureStore({
  reducer: {
    genre: genreReducer,
    books: booksReducer,
    readingList: readingListReducer,
  },
});