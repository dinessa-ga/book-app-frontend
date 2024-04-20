// import '../index.css';


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useBooks } from '../services/api.js';
// import { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } from '../store/booksSlice.js';



// function BookList(){
//     return(
//         <>
//         <h1>Hola</h1>
//         </>
//     )
// }

// export default BookList

import React from 'react';

function BookList({ books, onAddToReadingList }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.genre}</p>
          <button onClick={() => onAddToReadingList(book)}>Agregar a la lista de lectura</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
