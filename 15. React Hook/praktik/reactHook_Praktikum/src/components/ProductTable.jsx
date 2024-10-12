import React from "react";

const ProductTable = ({ productList }) => {
    return (
        <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
          </tr>
        </thead>   
        <tbody>
        {productList.map((product) => (
          <tr key={product.id}>
            <td>{product.productNumber}</td>
            <td>{product.productName}</td>
            <td>{product.productCategory}</td>
            <td>{product.productFreshness}</td>
            <td>{product.productPrice}</td>
          </tr>
        ))}
      </tbody>
    </table> 
    );
};

export default ProductTable;