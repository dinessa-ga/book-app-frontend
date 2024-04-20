// GenreFilter.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setGenreFilter } from './filtersSlice'; // Importar la acción para establecer el filtro de género

function GenreFilter() {
  const dispatch = useDispatch();

  // Lógica para obtener géneros desde la API utilizando React Query
  const { data: genres } = useQuery('genres', async () => {
    const response = await fetch('/api/genres'); // Endpoint de la API para obtener géneros
    return response.json();
  });

  const handleGenreChange = (event) => {
    dispatch(setGenreFilter(event.target.value)); // Actualizar el filtro de género en el store
  };

  return (
    <div>
      <label htmlFor="genre">Filter by Genre:</label>
      <select id="genre" onChange={handleGenreChange}>
        <option value="">All</option>
        {genres && genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
