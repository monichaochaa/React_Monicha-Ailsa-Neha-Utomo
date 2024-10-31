import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateProduct from "./components/createProduct";
import ListProduct from "./components/ListProduct";

const App = () => {
  return (
    <Router>
    <div className="App">
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-product">Create Product</Link>
          </li>
          <li>
            <Link to="/list-product">List Product</Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<h1>Welcome to Product Management</h1>} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/list-product" element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  </Router>
);
};

export default App;