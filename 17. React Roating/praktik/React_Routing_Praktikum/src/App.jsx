import react from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import LandingPage from './components/LandingPage'
//import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const products = [
    { productName: 'Product 1', category: 'Category 1', image: 'image1.jpg', freshness: 'Brand New', description: 'Description 1', price: '$10' },
  ];
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProductList products={products} />} />
      <Route path="/account/:id" element={<ProductDetail products={products} />} />
    </Routes>
  </Router>
  );
}

export default App;