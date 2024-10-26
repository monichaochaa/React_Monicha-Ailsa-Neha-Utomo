import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';

const App = () => {
  return (
      <Router>
          <div className="App">
              <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/create" element={<CreateProduct />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;