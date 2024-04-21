
const API_URL = 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/';

export const getBooks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Hubo un error al obtener los libros: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};