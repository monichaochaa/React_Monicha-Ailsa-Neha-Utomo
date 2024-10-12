import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductTable from './ProductTable';

const CreateProduct = () => {
    const [productData, setProductData] = useState({
      productName: '',
      productCategory: '',
      productFreshness: '',
      productPrice: '',
    });
  
    const [productList, setProductList] = useState([]);

    const generateUniqueNumber = () => {
      let uniqueNumber;
      let isDuplicate;
  
      do {
        uniqueNumber = Math.floor(1000 + Math.random() * 9000); // Nomor acak 4 digit
        isDuplicate = productList.some(product => product.productNumber === uniqueNumber);
      } while (isDuplicate);
  
      return uniqueNumber;
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
          ...productData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
          id: uuidv4(), // Membuat ID unik untuk produk
          productNumber: generateUniqueNumber(), // Nomor produk unik
          ...productData,
        };
        setProductList([...productList, newProduct]);
        setProductData({
          productName: '',
          productCategory: '',
          productFreshness: '',
          productPrice: '',
        });
      };
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
              placeholder="Product Name"
            />
             <input
          type="text"
          name="productCategory"
          value={productData.productCategory}
          onChange={handleInputChange}
          placeholder="Product Category"
        />
        <input
          type="text"
          name="productFreshness"
          value={productData.productFreshness}
          onChange={handleInputChange}
          placeholder="Product Freshness"
        />
         <input
          type="number"
          name="productPrice"
          value={productData.productPrice}
          onChange={handleInputChange}
          placeholder="Product Price"
        />
        <button type="submit">Add Product</button>
      </form>

      <ProductTable productList={productList} />
    </div>
  );
};

export default CreateProduct;