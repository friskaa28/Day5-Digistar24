import React from 'react';
import { useSuggestions } from '../hooks/useSuggestions';


export const Contact = () => {
  const {
    name,
    suggestion,
    suggestionsList,
    setName,
    setSuggestion,
    handleAddSuggestion,
    handleLike,
  } = useSuggestions();

  return (
    <div className='w-[80%] mx-auto py-20'>
      <h1 className='mb-2 text-4xl font-bold'>Kritik dan Saran</h1>
      <p>Silakan masukan kritik dan saran Anda</p>
      <input
        type='text'
        placeholder='Nama'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border p-2 rounded w-full mb-2'
      />
      <textarea
        placeholder='Saran Anda...'
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        className='border p-2 rounded w-full mb-2'
      />
      <button
        onClick={handleAddSuggestion}
        className='bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors'>
        Kirim Saran
      </button>

      <div className='mt-6'>
        {suggestionsList.map((item, index) => (
          <div key={index} className='border p-4 mb-4 rounded shadow-md'>
            <p className='font-bold mb-1'>{item.name}</p>
            <div className='flex justify-between items-center'>
              <p className='flex-1'>{item.suggestion}</p>
              <button
                onClick={() => handleLike(index)}
                className='flex items-center space-x-2 border-2 border-teal-500 text-teal-500 p-2 rounded hover:bg-teal-500 hover:text-white transition-colors'>
                <span>👍</span>
                <span>{item.likes} Like</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12'>
        <h1 className='mb-2 text-4xl font-bold'>Hubungi Kami</h1>
        <p>Memiliki pertanyaan lebih lanjut seputar Padi UMKM?</p>
        <p>Silahkan menghubungi Kami secara langsung</p>
        <div className='flex items-center justify-center flex-1 pt-4 space-x-6'>
          <div className='flex flex-col flex-1 p-8 border-2 rounded-lg'>
            <h2 className='mb-4 text-xl font-bold'>Layanan informasi Pengguna</h2>
            <h3 className='mt-4 font-bold text-md'>Email</h3>
            <p>cs@padiumkm.id</p>
            <h3 className='mt-4 font-bold text-md'>Whatsapp</h3>
            <p>+62 812 9000 7820</p>
            <h3 className='mt-4 font-bold text-md'>Senin - Jumat | 08:00 - 17:00 WIB</h3>
          </div>
          <div className='flex flex-col flex-1 p-8 border-2 rounded-lg'>
            <h2 className='text-xl font-bold'>Kantor Kami</h2>
            <h3 className='font-bold text-md'>Padi UMKM Headquarters</h3>
            <h4>Gedung Telkom Direktorat Business and Technology</h4>
            <p>Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
