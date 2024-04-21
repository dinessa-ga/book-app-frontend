import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../services/api';

// Aquí, estás devolviendo directamente la respuesta de la API.
export const fetchBooks = createAsyncThunk('books/fetchBooks', getBooks);

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
