import { useSelector, useDispatch } from 'react-redux';
import { setGenre } from '../store/genreSlice';

const GenreFilter = () => {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genre);

  const handleGenreChange = (e) => {
    dispatch(setGenre(e.target.value));
  };

  return (
    <select value={genre} onChange={handleGenreChange}>
      <option value="Todos">Todos</option>
      {/* Aquí puedes agregar más opciones de género */}
    </select>
  );
};

export default GenreFilter;