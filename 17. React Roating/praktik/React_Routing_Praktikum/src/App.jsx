import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LandingPage from './components/LandingPage';
//import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/account/:productId" element={<ProductDetail />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App; 