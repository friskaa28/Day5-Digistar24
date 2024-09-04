import React from 'react';
import { helpTopic } from '../constants/data';
import { Card } from '../components/Card';

export const Help = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-12 py-28'>
      <h1 className='text-4xl font-bold'>Pilih Topik Sesuai Kendalamu</h1>
      <div className='flex space-x-6 justify-evenly'>
        {helpTopic.map((item, index) => (
          <Card
            key={item.title + index}
            logo={item.logo}
            title={item.title}
            descriptions={item.descriptions}
          />
        ))}
      </div>
    </div>
  );
};
