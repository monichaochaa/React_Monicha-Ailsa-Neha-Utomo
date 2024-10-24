import React, { useReducer, useState } from "react";
import { Link } from 'react-router-dom';
import useProductStore from "./ProductStore";

const initialState = {
    products: [
      { id: "1,001", name: 'Lorem', category: 'ipsum', price: 1, freshness: 'Brand New', description: 'adipisicing' },
      { id: "1,002", name: 'Lorem', category: 'ipsum', price: 9, freshness: 'Second Hand', description: 'adipisicing' },
      { id: "1,003", name: 'Lorem', category: 'ipsum', price: 20, freshness: 'Brand New', description: 'adipisicing' },
      { id: "1,004", name: 'Lorem', category: 'ipsum', price: 9, freshness: 'Refused', description: 'adipisicing' },
    ],
  };
  function productReducer(state, action) {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
      case 'EDIT_PRODUCT':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? { ...product, ...action.payload.updatedProduct } : product
          ),
        };
        default:
            return state;
        }
      }

const ProductList = () => {
    const [state, dispatch] = useReducer(productReducer, initialState);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    freshness: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: 'EDIT_PRODUCT', payload: { id: newProduct.id, updatedProduct: newProduct } });
    } else {
      dispatch({ type: 'ADD_PRODUCT', payload: { ...newProduct, id: Date.now().toString() } });
    }
    setNewProduct({ id: '', name: '', category: '', price: '', freshness: '' });
    setIsEditing(false);
  };
  const editProduct = (product) => {
    setNewProduct(product);
    setIsEditing(true);
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>

 {/* Form for adding or editing product */}
 <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" className="border p-2 mb-2" />
        <input type="text" name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" className="border p-2 mb-2" />
        <input type="text" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" className="border p-2 mb-2" />
        <input type="text" name="freshness" value={newProduct.freshness} onChange={handleChange} placeholder="Freshness" className="border p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      {/* Product Table */}
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Id</th>
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Product Category</th>
            <th className="border border-gray-300 px-4 py-2">Product Freshness</th>
            <th className="border border-gray-300 px-4 py-2">Product Price</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.category}</td>
              <td className="border border-gray-300 px-4 py-2">{product.freshness}</td>
              <td className="border border-gray-300 px-4 py-2">${product.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 mr-2 rounded hover:bg-red-700 transition duration-300"
                        onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: product.id })}>
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition duration-300"
                        onClick={() => editProduct(product)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;