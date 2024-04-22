import '../index.css';

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
    <div className="flex flex-wrap justify-around"  >
     {data ? data.map((item, index) => (
        <BookCard key={index} book={item.book} />
      )) : 'Cargando...'}
    </div>
  );
};

export default BookList;
