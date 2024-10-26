import React, { useReducer, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const initialState = {
    products: [
      { id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836", 
        productName: "John", 
        productCategory: "Doe", 
        productFreshness: "Doe", 
        productPrice: "Doe", 
        image: "Doe", 
        additionalDescription: "Doe", },
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
          productName: '',
          productCategory: '',
          productPrice: '',
          productFreshness: '',
          image: ''
        });
        const [isEditing, setIsEditing] = useState(false);
        const [productToDelete, setProductToDelete] = useState(null);
      
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
          setNewProduct({ id: '', productName: '', productCategory: '', productPrice: '', productFreshness: '', image: '' });
          setIsEditing(false);
        };
      
        const editProduct = (product) => {
          setNewProduct(product);
          setIsEditing(true);
        };

        const confirmDelete = (id) => {
          setProductToDelete(id);
      };
  
      const handleDelete = () => {
          dispatch({ type: 'DELETE_PRODUCT', payload: productToDelete });
          setProductToDelete(null);
      };
  
      const cancelDelete = () => {
          setProductToDelete(null);
      };
      
        return (
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
      
            <form onSubmit={handleSubmit} className="mb-4">
              <input type="text" name="productName" value={newProduct.productName} onChange={handleChange} placeholder="Product Name" className="border p-2 mb-2" />
              <input type="text" name="productCategory" value={newProduct.productCategory} onChange={handleChange} placeholder="Product Category" className="border p-2 mb-2" />
              <input type="text" name="productPrice" value={newProduct.productPrice} onChange={handleChange} placeholder="Product Price" className="border p-2 mb-2" />
              <input type="text" name="productFreshness" value={newProduct.productFreshness} onChange={handleChange} placeholder="Product Freshness" className="border p-2 mb-2" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                {isEditing ? 'Update Product' : 'Add Product'}
              </button>
            </form>
      
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Id</th>
                  <th className="border border-gray-300 px-4 py-2">Product Name</th>
                  <th className="border border-gray-300 px-4 py-2">Product Category</th>
                  <th className="border border-gray-300 px-4 py-2">Product Freshness</th>
                  <th className="border border-gray-300 px-4 py-2">Product Price</th>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {state.products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.productCategory}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.productFreshness}</td>
                    <td className="border border-gray-300 px-4 py-2">${product.productPrice}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.image}</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-red-500 text-white px-3 py-1 mr-2 rounded hover:bg-red-700 transition duration-300"
        onClick={() => confirmDelete(product.id)}>
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
              {/* Confirmation Dialog */}
              {productToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p>Apakah kalian ingin menghapus produk ini?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mr-2 rounded">Hapus</button>
                            <button onClick={cancelDelete} className="bg-blue-500 text-white px-4 py-2 rounded">Tidak</button>
                        </div>
                    </div>
                </div>
            )}
          </div>
        );
      };
      
      export default ProductList;