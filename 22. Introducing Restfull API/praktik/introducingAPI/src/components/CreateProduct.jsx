import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    freshness: "",
    price: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://6718b2887fc4c5ff8f4a9fa3.mockapi.io/products", product);
      setMessage("Product added successfully!");

      setProduct({
        name: "",
        category: "",
        freshness: "",
        price: ""
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("Failed to add product.");
    }
  };

  return (
    <div>
      <h2>Create New Product</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Product Category"
          required
        />
        <input
          type="text"
          name="freshness"
          value={product.freshness}
          onChange={handleChange}
          placeholder="Product Freshness"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;