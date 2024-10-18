import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();

    const products = [
      { id: "1,001", name: 'Lorem', category: 'ipsum', price: 1, freshness: 'Brand new', description: 'adipisicing' },
      { id: "1,002", name: 'Lorem', category: 'ipsum', price: 10, freshness: 'Second Hand', description: 'adipisicing' },
      { id: "1,003", name: 'Lorem', category: 'ipsum', price: 20, freshness: 'Brand New', description: 'adipisicing' },
      { id: "1,004", name: 'Lorem', category: 'ipsum', price: 9, freshness: 'Refused', description: 'adipisicing' },
    ];

    const product = products.find((p) => p.id === productId);

      return (
        <div className="container mx-auto p-4">
      {product ? (
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-3xl font-bold mb-4">{product.name} - {product.id}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Freshness:</strong> {product.freshness}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};
    
    export default ProductDetail;