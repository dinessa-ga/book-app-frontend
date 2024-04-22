
// eslint-disable-next-line react/prop-types
const BookCard = ({ book, onAddToReadingList }) => {
  return (
    <div className="p-4 m-2 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-blue-700">{book.title}</h2>
      <p className="text-gray-700">{book.description}</p>
      <img className="bg-indigo-500 " src={book.cover} alt={book.title} />
      <button 
        onClick={() => onAddToReadingList(book)}
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Agrega en tu lista
      </button>
    </div>
  );
};

export default BookCard;
