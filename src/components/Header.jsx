import React, { useContext } from 'react';
import { navItems } from '../constants/data';
import { Link } from 'react-router-dom';
import PadiUMKLogo from '../assets/images/padiUMKM.png';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

export const Header = ({ isLogin, onClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme

  return (
    <div className={`flex w-full mx-auto py-4 items-center sticky top-0 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} `}>
      <img 
        src={PadiUMKLogo} 
        alt='Padi UMKM' 
        width={117} 
        height={64} 
        className='ml-60 mr-20 transition-transform duration-200 hover:scale-105' 
      />

      <nav className='flex flex-row items-center mr-20 space-x-10'>
        {navItems.map((item, index) => (
          <Link 
            key={item.path + index} 
            to={item.path} 
            className='text-lg font-medium text-[#019EA9] relative group'
          >
            <span className='group-hover:text-black group-hover:font-bold'>
              {item.name}
            </span>
            <span className='block h-[2px] bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute left-0 bottom-[-2px] w-full'></span>
          </Link>
        ))}
      </nav>
      <button
        onClick={onClick}
        className='px-2 py-1 hover:text-white hover:bg-[#019EA9] border rounded-md font-base text-[#019EA9] border-[#019EA9] mr-4'
      >
        {isLogin ? 'Logout' : 'Login'}
      </button>
      <button
        onClick={toggleTheme}
        className='p-2 rounded-full focus:outline-none transition-colors duration-300'
      >
        {theme === 'dark' ? (
          <FaSun className='text-yellow-500 w-6 h-6' />
        ) : (
          <FaMoon className='text-gray-800 w-6 h-6' />
        )}
      </button>
    </div>
  );
};
