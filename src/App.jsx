import React, { useContext, useEffect } from 'react';
import './App.css';
import AppRoute from './router/AppRouter';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <AppRoute />
    </div>
  );
}

export default App;
