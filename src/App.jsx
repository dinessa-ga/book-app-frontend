// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useBooksQuery } from './api';
import BookList from './BookList';
import ReadingList from './ReadingList';
import GenreFilter from './GenreFilter';

function App() {
  const [readingList, setReadingList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const { data: books, isError, error } = useQuery('books', useBooksQuery);

  useEffect(() => {
    // Carga la lista de lectura del almacenamiento local
    const storedReadingList = localStorage.getItem('readingList');
    if (storedReadingList) {
      setReadingList(JSON.parse(storedReadingList));
    }
  }, []);

  useEffect(() => {
    // Guarda la lista de lectura en el almacenamiento local cada vez que cambia
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  const addToReadingList = (book) => {
    setReadingList((prevReadingList) => [...prevReadingList, book]);
  };

  if (isError) {
    return <div>Error al cargar los libros: {error.message}</div>;
  }

  if (!books) {
    return <div>Cargando libros...</div>;
  }

  const filteredBooks = books.filter((book) => !selectedGenre || book.genre === selectedGenre);

  return (
    <div>
      <GenreFilter genres={['Fantasía', 'Ciencia Ficción']} onGenreSelect={setSelectedGenre} />
      <BookList books={filteredBooks} onAddToReadingList={addToReadingList} />
      <ReadingList readingList={readingList} />
    </div>
  );
}

export default App;
