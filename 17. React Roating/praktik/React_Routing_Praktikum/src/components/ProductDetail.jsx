import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();

    const product = {
        id: productId,
        name: `Product ${productId}`,
        category: `Category for ${productId}`,
        price: 150,
        description: `This is a detailed description for Product ${productId}.`,
        image: 'https://via.placeholder.com/150',
      };

      return (
        <div className="p-8">
          <h2 className="text-2xl mb-4">Product Detail</h2>
          <div className="flex">
            <img src={product.image} alt={product.name} className="w-32 h-32 mr-4" />
            <div>
              <p><strong>ID:</strong> {product.id}</p>
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductDetail;