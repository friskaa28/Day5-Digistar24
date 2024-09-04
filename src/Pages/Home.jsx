import React from 'react';
import BerandaHero from '../assets/images/beranda.webp';

export const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#D5FCFF] to-[rgb(44,188,212)]'>
      <div className='flex flex-row items-center py-20 justify-evenly'>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold leading-relaxed w-96'>
            PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan Pemerintah.
          </h1>
          <p className='w-[36rem] leading-relaxed'>
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun Swasta untuk mendapatkan
            transaksi dengan harga dan kualitas terbaik.
          </p>
          <button className='px-6 py-4 bg-[#019EA9] text-white text-sm rounded-lg'>
            Selengkapnya
          </button>
        </div>
        <img src={BerandaHero} alt='Beranda Hero' className='rounded-3xl w-[28rem]' />
      </div>
    </div>
  );
};
