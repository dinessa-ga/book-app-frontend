// store.js

import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice'; // Importar el slice para los libros

const store = configureStore({
  reducer: {
    books: booksReducer, // Agregar el slice para los libros al store
  },
});

export default store;
