import '../index.css';

import { useSelector, useDispatch } from 'react-redux';
import { addBookToReadingList } from '../store/readingListSlice';

const BookList = () => {  
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (book) => {
    dispatch(addBookToReadingList(book));
  };

  // Verifica si books existe y no está vacío
  if (!books || books.length === 0) {
    return <div>No hay libros disponibles</div>;
  }

  return (
    <div>
      {books.map((book) => {
        // Desestructura book para obtener las propiedades que necesitas
        const { ISBN, title, cover, synopsis } = book;

        return (
          <div key={ISBN}>
            <h2>{title}</h2>
            <img src={cover} alt={title} />
            <p>{synopsis}</p>
            <button onClick={() => handleAddBook(book)}>Agregar a la lista de lectura</button>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
