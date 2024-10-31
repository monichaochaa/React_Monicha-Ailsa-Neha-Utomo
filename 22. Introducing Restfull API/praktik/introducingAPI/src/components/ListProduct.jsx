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
          const response = await axios.put(
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
                    <button className="bg-red-500 text-white py-1 px-3 rounded-md mr-2">Delete</button>
                    <button className="bg-green-500 text-white py-1 px-3 rounded-md">Edit</button>
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
        >
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            value={editingProduct.category}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, category: e.target.value })
            }
          />
          <input
            type="text"
            value={editingProduct.freshness}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, freshness: e.target.value })
            }
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, price: e.target.value })
            }
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>
        </form>
      )}  

       </div>
      );
    };    

export default ListProduct;