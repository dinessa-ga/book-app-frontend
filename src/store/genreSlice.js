// genreSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Todos';

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenre: (state, action) => action.payload,
  },
});

export const { setGenre } = genreSlice.actions;
export const selectGenre = (state) => state.genre;

export default genreSlice.reducer;
