import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <section className="w-full max-w-[936px] mx-auto mt-8">
            <h2 className="text-2xl font-bold mt-10 mb-5">List Product</h2>
            <table className="min-w-full bg-white shadow-md rounded-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-3 text-left">No</th>
                        <th className="p-3 text-left">Product Name</th>
                        <th className="p-3 text-left">Product Category</th>
                        <th className="p-3 text-left">Image of Product</th>
                        <th className="p-3 text-left">Product Freshness</th>
                        <th className="p-3 text-left">Additional Description</th>
                        <th className="p-3 text-left">Product Price</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">
                                <Link to={`/account/${index + 1}`} className="text-blue-600 hover:underline">
                                    {product.productName}
                                </Link>
                            </td>
                            <td className="p-3">{product.category}</td>
                            <td className="p-3">{product.image}</td>
                            <td className="p-3">{product.freshness}</td>
                            <td className="p-3">{product.description}</td>
                            <td className="p-3">{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ProductList;
