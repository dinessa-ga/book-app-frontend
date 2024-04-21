
import { useSelector, useDispatch } from 'react-redux';
import { removeBookFromReadingList } from '../store/readingListSlice';

const ReadingList = () => {
  const dispatch = useDispatch();
  const readingList = useSelector((state) => state.readingList);

  const handleRemoveBook = (book) => {
    dispatch(removeBookFromReadingList(book));
  };

  return (
    <div>
      {readingList.map((book) => (
        <div key={book.ISBN}>
          <h2>{book.title}</h2>
          <img src={book.cover} alt={book.title} />
          <p>{book.synopsis}</p>
          <button onClick={() => handleRemoveBook(book)}>Eliminar de la lista de lectura</button>
        </div>
      ))}
    </div>
  );
};

export default ReadingList;