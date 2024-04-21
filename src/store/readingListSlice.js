// readingListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const readingListSlice = createSlice({
  name: 'readingList',
  initialState,
  reducers: {
    addBookToReadingList: (state, action) => {
      // siempre que el libro ya no esté en la lista de lectura
      if (!state.some(book => book.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeBookFromReadingList: (state, action) => {
      // Filtra el libro que quieres eliminar de la lista de lectura
      return state.filter(book => book.id !== action.payload.id);
    },
  },
});

export const { addBookToReadingList, removeBookFromReadingList } = readingListSlice.actions;

export default readingListSlice.reducer;