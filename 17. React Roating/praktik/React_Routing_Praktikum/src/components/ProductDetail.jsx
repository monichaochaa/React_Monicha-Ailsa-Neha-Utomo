import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const product = products[id - 1];
   
    return (
        <div>
            <h2 className="text-2xl font-bold">{product.productName}</h2>
            <p>Category: {product.category}</p>
            <p>Image: {product.image}</p>
            <p>Freshness: {product.freshness}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
};

export default ProductDetail;