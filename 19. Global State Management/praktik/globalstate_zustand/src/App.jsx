import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';

const App = () => {
  return (
      <Router>
          <div className="App">
              <Routes>
              <Route path="/" element={<ProductList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;