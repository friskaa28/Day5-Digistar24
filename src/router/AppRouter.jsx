import { useState, useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Help } from '../Pages/Help';
import { Media } from '../Pages/Media';
import { Contact } from '../Pages/Contact';
import { Footer } from '../components/Footer';
import { PrivateRoute } from './PrivateRoute';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

function AppRoute() {
  const [isLogin, setIsLogin] = useState(false);
  const { theme } = useContext(ThemeContext); // Access the theme from the context

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Router>
      <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        <Header isLogin={isLogin} onClick={handleLogin} />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/about-us'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path={'/help'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <Help />
              </PrivateRoute>
            }
          />
          <Route
            path={'/media'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <Media />
              </PrivateRoute>
            }
          />
          <Route
            path={'/contact'}
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRoute;
