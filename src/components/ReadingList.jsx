// ReadingList.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookCard from './BookCard';
import { useSelector } from 'react-redux';


function ReadingList() {
  const readingList = useSelector(state => state.readingList); // Obtener la lista de lectura del store

  return (
    <div>
      <h2>Reading List</h2>
      <div className="reading-list">
        {readingList.map(book => (
          <div key={book.id} className="book-card">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
