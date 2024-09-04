import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MediaInformations } from '../constants/data';
import { Card2 } from '../components/Card2';

export const Media = () => {
  const [apiData, setApiData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [allDataFetched, setAllDataFetched] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const fetchedData = response.data.map((item) => ({
          title: item.title,
          description: item.body,
          image: `https://picsum.photos/seed/${item.id}/300/200`,
        }));
        setApiData(fetchedData);
        // Tampilkan 4 item awal
        setVisibleData([...MediaInformations, ...fetchedData.slice(0, 4)]);
      })
      .catch(error => {
        console.error('Error fetching data from API', error);
      });
  }, []);

  const loadMore = () => {
    const newItemsToShow = itemsToShow + 4;
    setItemsToShow(newItemsToShow);
    const newVisibleData = [...MediaInformations, ...apiData.slice(0, newItemsToShow)];
    setVisibleData(newVisibleData);

    if (newItemsToShow >= apiData.length) {
      setAllDataFetched(true);
    }
  };

  return (
    <div className='w-[80%] mx-auto space-y-6'>
      <h1 className='text-4xl font-bold'>Media</h1>
      <p>Informasi seputar Padi UMKM</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4'>
        {visibleData.map((item, index) => (
          <Card2
            key={item.title + index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      {!allDataFetched && (
        <button
          onClick={loadMore}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg mt-4'>
          Load More
        </button>
      )}
      {allDataFetched && (
        <button
          disabled
          className='px-4 py-2 bg-gray-500 text-white rounded-lg mt-4 cursor-not-allowed'>
          No More Data
        </button>
      )}
    </div>
  );
};
