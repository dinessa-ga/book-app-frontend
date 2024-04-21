
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import GenreFilter from './components/GenreFilter';

import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';

import {store} from './store/store'


const App = () => {
  const dispatch = useDispatch();
  const genre = useSelector(store);
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { isLoading, error } = useQuery('books', fetchBooks, {
    onSuccess: (data) => {
      fetchBooks(data);
    },
  });

  if (isLoading) return 'Cargando...';
  if (error) return `Hubo un error al obtener los libros: ${error.message}`;

  const filteredBooks = genre === 'Todos' ? books : books.filter(book => book.genre === genre);

  return (
    <div className="App">
      <GenreFilter />
      <BookList />
     <BookList books={filteredBooks} />
      <ReadingList/>
    </div>
  );
};

export default App;
