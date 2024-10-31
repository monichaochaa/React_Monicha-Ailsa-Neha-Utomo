import React, { useState, useEffect } from "react";
import axios from "axios";

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null); 
    const [message, setMessage] = useState("");
    
    const fetchProducts = async () => {
        try {
          const response = await axios.get("https://67204f1ae7a5792f05310cd2.mockapi.io/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      const updateProduct = async (product) => {
        try {
          await axios.put(
            `https://67204f1ae7a5792f05310cd2.mockapi.io/products/${product.id}`,
            product
          );
          setMessage("Product updated successfully!");
          setEditingProduct(null);
          fetchProducts();
        } catch (error) {
          console.error("Error updating product:", error);
          setMessage("Failed to update product.");
        }
      };

      const deleteProduct = async (id) => {
        try {
          await axios.delete(`https://67204f1ae7a5792f05310cd2.mockapi.io/products/${id}`);
          setMessage("Product deleted successfully!");
          fetchProducts();
        } catch (error) {
          console.error("Error deleting product:", error);
          setMessage("Failed to delete product.");
        }
      };

      useEffect(() => {
        fetchProducts();
      }, []);
    
      return (
        <div className="container mx-auto mt-10 px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">List Product</h1>
          {message && <p className="text-green-600 mb-4">{message}</p>}

          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">No</th>
                <th className="py-3 px-6 text-left">Product Name</th>
                <th className="py-3 px-6 text-left">Product Category</th>
                <th className="py-3 px-6 text-left">Product Freshness</th>
                <th className="py-3 px-6 text-left">Product Price</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {products.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                  <td className="py-3 px-6 text-left">{product.name}</td>
                  <td className="py-3 px-6 text-left">{product.category}</td>
                  <td className="py-3 px-6 text-left">{product.freshness}</td>
                  <td className="py-3 px-6 text-left">{product.price}</td>
                  <td className="py-3 px-6 text-center">
                    <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white py-1 px-3 rounded-md mr-2">Delete</button>
                    <button onClick={() => setEditingProduct(product)} className="bg-green-500 text-white py-1 px-3 rounded-md">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

    {editingProduct && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateProduct(editingProduct);
          }}
          className="mt-6 p-4 bg-gray-100 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <input
              type="text"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
              placeholder="Product Name"
              className="border p-2 rounded-md w-full mb-2"
            />
            <input
              type="text"
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, category: e.target.value })
              }
              placeholder="Product Category"
              className="border p-2 rounded-md w-full mb-2"
            />
            <input
              type="text"
              value={editingProduct.freshness}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, freshness: e.target.value })
              }
              placeholder="Product Freshness"
              className="border p-2 rounded-md w-full mb-2"
            />
            <input
              type="number"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: e.target.value })
              }
              placeholder="Product Price"
              className="border p-2 rounded-md w-full mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-4 rounded-md mr-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditingProduct(null)}
              className="bg-gray-500 text-white py-1 px-4 rounded-md"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  };
  
  export default ListProduct;