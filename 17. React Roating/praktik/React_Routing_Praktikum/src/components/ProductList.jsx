import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products] = useState([
    { id: "1,001", name: 'Lorem', category: 'ipsum', price: 1, freshness: 'Brand new', description: 'adipisicing' },
    { id: "1,002", name: 'Lorem', category: 'ipsum', price: 10, freshness: 'Second Hand', description: 'adipisicing' },
    { id: "1,003", name: 'Lorem', category: 'ipsum', price: 20, freshness: 'Brand New', description: 'adipisicing' },
    { id: "1,004", name: 'Lorem', category: 'ipsum', price: 9, freshness: 'Refused', description: 'adipisicing' },
    ]);

    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">List Product</h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Product Category</th>
              <th className="border border-gray-300 px-4 py-2">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  <Link to={`/account/${product.id}`} className="hover:underline">
                    {product.id}
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };  
    
    export default ProductList;