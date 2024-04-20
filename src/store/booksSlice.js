// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksStart(state) {
      state.status = 'loading';
    },
    fetchBooksSuccess(state, action) {
      state.status = 'succeeded';
      state.books = action.payload; //los datos
    },
    fetchBooksFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } = booksSlice.actions;

export default booksSlice.reducer;
