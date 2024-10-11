import React, { useState } from "react";

const FormCreateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const validationForm = (e) => {
        e.preventDefault(); 

        if (productName.length < 6 || productName.length > 50) {
            alert("Product Name harus memiliki minimal 6 huruf dan maksimal 50 huruf.");
            return;
        }
        if (isNaN(productPrice) || productPrice <= 0) {
            alert("Product Price harus berupa angka yang valid.");
            return;
        }

        alert("Form berhasil di submit");
    };

    return (
        <div className="form-container">
            <h2>Detail Product</h2>
            <form onSubmit={validateForm}>
                <label htmlFor="productName">Product Name: </label>
                <br />
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="productCategory">Product Category: </label>
                <br />
                <select id="productCategory" name="productCategory" required>
                    <option value="" disabled selected>Pilih kategori...</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing</option>
                </select>
                <br />
                <label htmlFor="productFreshness">Product Freshness: </label>
                <br />
                <div className="product-freshness-container">
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="BrandNew"
                            name="productFreshness"
                            value="BrandNew"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            required
                        />
                        <label htmlFor="BrandNew" className="ml-3 block text-sm font-medium text-gray-700">Brand New</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="SecondHank"
                            name="productFreshness"
                            value="SecondHank"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            required
                        />
                        <label htmlFor="SecondHank" className="ml-3 block text-sm font-medium text-gray-700">Second Hand</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="Refurbished"
                            name="productFreshness"
                            value="Refurbished"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            required
                        />
                        <label htmlFor="Refurbished" className="ml-3 block text-sm font-medium text-gray-700">Refurbished</label>
                    </div>
                </div>
                <br />
                <label htmlFor="image">Image of Product: </label>
                <input type="file" id="image" name="image" required />
                <br />
                <label htmlFor="description">Additional Description: </label>
                <br />
                <textarea id="description" name="description" rows="4" cols="50"></textarea>
                <br />
                <label htmlFor="productPrice">Product Price: </label>
                <br />
                <input
                    type="text"
                    id="productPrice"
                    name="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

};

export default FormCreateProduct;
