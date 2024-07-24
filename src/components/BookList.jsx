// 

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import BookCard from './BookCard';

const BookList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dataFromApi = await fetchData();
      setData(dataFromApi.default.library);
    };

    getData();
  }, []);

  return (
    <>
      <section className="bg-gray-200">
        <h1 className="text-3xl font-bold text-center">Bienvenido a mi sitio web</h1>
        <p className="my-4">Este es un tutorial básico de Tailwind con Vite.js.</p>
        <p className="my-4">
            Tailwind es una biblioteca de clases CSS utilitarias diseñada para acelerar el proceso de diseño y desarrollo de sitios web.
        </p>
    </section>
      <div >
        {data ? data.map((item, index) => (
          <BookCard key={index} book={item.book} />
        )) : 'Cargando...'}
      </div>
    </>
  );
};

export default BookList;
