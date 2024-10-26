import React, { useState } from "react";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
   
    if (!productName) {
      newErrors.productName = "Product name is required.";
    }
    
    if (!productCategory) {
      newErrors.productCategory = "Please select a valid product category.";
    }

    if (!productFreshness) {
      newErrors.productFreshness = "Please select product freshness.";
    }

    if (!productPrice) {
      newErrors.productPrice = "Product price must be a positive number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddProduct({
        id: Date.now().toString(),
        productName,
        productCategory,
        productFreshness,
        productPrice,
        image: productImage,
      });
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
      setProductImage("");
    }
    };

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
    <input type="text" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
    <input type="text" placeholder="Product Freshness" value={productFreshness} onChange={(e) => setProductFreshness(e.target.value)} />
    <input type="text" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
    <input type="file" onChange={(e) => setProductImage(e.target.files[0].name)} />
    <button type="submit">Add Product</button>
  </form>
);
};

export default CreateProduct;