import React, { useState } from "react";

const CreateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const validateForm = (e) => {
        e.preventDefault();

        if (productName.length < 6 || productName.length > 50) {
            alert("Product Name harus memiliki minimal 6 huruf dan maksimal 50 huruf.");
            return false;
          }

        if (isNaN(productPrice) || productPrice <= 0) {
            alert("Product Price harus berupa angka yang valid.");
            return false;
          }

          alert("Form is valid!");
    return true;
  };

  return (
    <div>
      <h1>Create Product</h1>
      <h2>Detail Product</h2>
      <form onSubmit={validateForm}>
        <label htmlFor="productName">Product name:</label><br />
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        /><br /><br /> 

        <label htmlFor="productCategory">Product Category:</label><br />
        <select id="productCategory" name="productCategory" required>
          <option value="" disabled selected></option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="clothing">Clothing</option>
        </select><br /><br />

        <label htmlFor="productFreshness">Product Freshness:</label><br />
        <input type="radio" id="BrandNew" name="productFreshness" value="BrandNew" required />
        <label htmlFor="BrandNew">Brand New</label><br />

        <input type="radio" id="SecondHand" name="productFreshness" value="SecondHand" required />
        <label htmlFor="SecondHand">Second Hand</label><br />

        <input type="radio" id="Refurbished" name="productFreshness" value="Refurbished" required />
        <label htmlFor="Refurbished">Refurbished</label><br /><br />

        <label htmlFor="image">Image of Product:</label>
        <input type="file" id="image" name="image" required /><br /><br />

        <label htmlFor="description">Additional Description:</label><br />
        <textarea id="description" name="description" rows="4" cols="50"></textarea><br /><br />

        <label htmlFor="productPrice">Product price:</label><br />
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        /><br /><br />

        <input type="submit" value="Submit" />
      </form>

      </div>
  );
};

export default CreateProduct;