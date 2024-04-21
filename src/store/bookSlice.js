// booksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from './services/api';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await getBooks();
  return response.data;
  
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default booksSlice.reducer;
