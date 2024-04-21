
const API_URL = 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/';

// api.js
export const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };
  
