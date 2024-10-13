import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CreateProduct from './components/CreateProduct.jsx'; 
import CreateProductPage from './components/CreateProductPage';

const App = () => {
  return (
      <Router>
          <div className="bg-gray-100 min-h-screen flex justify-center items-center">
              <Routes>
                  <Route path="/" element={<CreateProduct />} /> {/* Halaman Utama */}
                  <Route path="/create-product" element={<CreateProductPage />} /> {/* Halaman Create Product */}
              </Routes>
          </div>
      </Router>
  );
};

export default App;