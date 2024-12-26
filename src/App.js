import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import { useEffect } from 'react';
import Product from './pages/productPage/product';

// Define ScrollToTop outside of the App component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollDelay = 200;
    const scrollPosition = 0; 

    const handleScroll = () => {
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    };

    const timeoutId = setTimeout(handleScroll, scrollDelay);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
