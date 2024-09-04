import React from 'react';

export const Card = ({ logo, title, descriptions }) => {
  return (
    <div className='flex flex-col p-6 space-y-4 border border-2 rounded-lg w-96'>
      <div className='flex items-center space-x-2'>
        <img src={logo} alt='title' className='size-10' />
        <h3 className='text-base font-bold text-[#525252]'>{title}</h3>
      </div>
      <div className='flex flex-col flex-1 space-y-2 list-none text-[#686E76]'>
        {descriptions.map((desc, index) => (
          <li key={desc + index}>{desc}</li>
        ))}
      </div>
      <button className='w-fit px-2 py-1 border-2 rounded-md border-[#1AA1AC] text-[#1AA1AC] text-sm hover:text-white hover:bg-[#1AA1AC]'>
        Lihat Semua Artikel
      </button>
    </div>
  );
};
