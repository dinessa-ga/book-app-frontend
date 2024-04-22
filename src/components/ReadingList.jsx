import { useSelector } from 'react-redux';


const ReadingList = () => {
  const readingList = useSelector((state) => state.readingList);

  return (
    <div>
      {readingList.map((book) => (
        <div key={book.ISBN}>
          <h2>{book.title}</h2>
          <img src={book.cover} alt={book.title} />
          <p>{book.synopsis}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadingList;