
//import { useQuery } from 'react-query';

const API_URL = 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/';

// export const fetchBooks = async () => {
//   const response = await fetch(API_URL);
//   if (!response.ok) {
//     throw new Error('Error al cargar los libros');
//   }
//   return response.json();
// };

// export const useBooksQuery = () => {
//   return useQuery('books', fetchBooks);
// };

// api.js
export const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };
  
