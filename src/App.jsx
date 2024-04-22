
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import GenreFilter from './components/GenreFilter';

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import store from './store/store';
import { selectGenre } from './store/genreSlice';
import { fetchBooks } from './store/booksSlice';

const App = () => {
  const dispatch = useDispatch();
  const genre = useSelector(selectGenre);
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filteredBooks = genre === 'Todos' ? books : books.filter(book => book.genre === genre);

  return (
    <div className="App">
      <GenreFilter />
      <BookList books={filteredBooks} />
      <ReadingList />
    </div>
  );
};

export default App;