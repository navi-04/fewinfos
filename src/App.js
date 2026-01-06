import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceBuy from './pages/ServiceBuy';
import Products from './pages/Products';
import ProductBuy from './pages/ProductBuy';
import CourseBuy from './pages/CourseBuy';
import TryProduct from './pages/TryProduct';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-buy/:serviceId" element={<ServiceBuy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-buy/:productId" element={<ProductBuy />} />
          <Route path="/try-product/:productId" element={<TryProduct />} />
          <Route path="/course-buy/:courseId" element={<CourseBuy />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
