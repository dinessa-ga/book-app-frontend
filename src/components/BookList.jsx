import '../index.css';


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

// BookList.jsx


// eslint-disable-next-line no-unused-vars
// import React from 'react';
// import useBooksQuery from './api.js';
// import BookCard from './BookCard';

// eslint-disable-next-line react/prop-types
// function BookList({ onAddToReadingList }) {
//   const books = useBooksQuery();

//   return (
//     <div>
//       {books.map((book) => (
//         <BookCard key={book.id} book={book} onAddToReadingList={onAddToReadingList} />
//       ))}
//     </div>
//   );
// }

// export default BookList;

// BookList.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import BookCard from './BookCard';

const BookList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await fetchData();
      setData(dataFromApi.default.library);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
     {data ? data.map((item, index) => (
        <BookCard key={index} book={item.book} />
      )) : 'Cargando...'}
    </div>
  );
};

export default BookList;
