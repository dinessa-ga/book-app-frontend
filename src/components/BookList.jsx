import '../index.css';



import { useSelector, useDispatch } from 'react-redux';
import { addBookToReadingList } from '../store/readingListSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (book) => {
    dispatch(addBookToReadingList(book));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.ISBN}>
          <h2>{book.title}</h2>
          <img src={book.cover} alt={book.title} />
          <p>{book.synopsis}</p>
          <button onClick={() => handleAddBook(book)}>Agregar a la lista de lectura</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;