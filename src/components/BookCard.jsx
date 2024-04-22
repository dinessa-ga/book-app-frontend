import '../index.css';



// const BookCard = ({ book, onAddToReadingList }) => {
//   return (
//     <div className="p-4 m-2 bg-white rounded shadow-lg">
//       <h2 className="text-xl font-bold mb-2">{book.title}</h2>
//       <p className="text-gray-700">{book.description}</p>
//       <img className="mt-2 h-64 w-full object-cover" src={book.cover} alt={book.title} />
//       <button onClick={() => onAddToReadingList(book)}>Agregar a la lista de lectura</button>
//     </div>
//   );
// };

// export default BookCard;

// components/BookCard.js

import { useDispatch } from 'react-redux';
import { addBookToReadingList } from '../store/readingListSlice';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBookToReadingList(book));
  };



  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.synopsis}</p>
      <button onClick={handleAddBook}>Agregar a tu lista</button>
    </div>
  );
};

export default BookCard;