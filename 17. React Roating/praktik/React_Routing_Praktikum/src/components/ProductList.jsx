import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products] = useState([
      { id: '1,001', name: 'Product A', category: 'Category 1', price: 100 },
      { id: '1,002', name: 'Product B', category: 'Category 2', price: 200 },
      { id: '1,003', name: 'Product C', category: 'Category 3', price: 300 },
    ]);

    return (
        <div className="p-8">
          <h2 className="text-2xl mb-4">List Product</h2>
          <table className="min-w-full bg-white shadow-md rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">No</th>
                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {products.map((product) => (
                <tr key={product.id}>
                  {/* Link untuk menuju halaman detail produk */}
                  <td className="p-3">
                    <Link to={`/product/${product.id}`}>{product.id}</Link>
                  </td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default ProductList;