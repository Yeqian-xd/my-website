import { useState } from 'react';
import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import GiftBox from './sections/GiftBox';
import Stages from './sections/Stages';
import Technology from './sections/Technology';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products'>('home');

  const goToProducts = () => {
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'products') {
    return <ProductsPage onBack={goToHome} />;
  }

  return (
    <div className="min-h-screen bg-moon-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onViewAll={goToProducts} />
        <Stages />
        <Technology />
        <GiftBox />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
