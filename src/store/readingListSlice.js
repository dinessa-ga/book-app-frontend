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
    
  },
});


export const { addBookToReadingList } = readingListSlice.actions;

export default readingListSlice.reducer;