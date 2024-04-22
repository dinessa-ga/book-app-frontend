import '../index.css';


import { useSelector } from 'react-redux';
import BookCard from './BookCard'; 
//import { addBookToReadingList } from '../store/readingListSlice';
//import BookCard from './BookCard'; // Asegúrate de importar BookCard

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.ISBN} book={book} />
      ))}
    </div>
  );
};

export default BookList;