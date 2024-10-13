import React, { useState } from "react";

const CreateProduct = () => {
    const [productName, setProductName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Fungsi untuk memvalidasi input saat onChange
    const handleProductNameChange = (e) => {
        const value = e.target.value;
        setProductName(value);

        // Validasi: Product Name tidak boleh lebih dari 25 karakter
        if (value.length > 25) {
            setErrorMessage("Product Name must not exceed 25 characters.");
        } 
        // Validasi: Product Name tidak boleh lebih dari 10 karakter
        else if (value.length > 10) {
            setErrorMessage("Product Name exceeds 10 characters.");
        } 
        // Bersihkan error message jika validasi lolos
        else {
            setErrorMessage("");
        }
    };

    // Fungsi untuk validasi ketika submit
    const validateForm = (e) => {
        e.preventDefault();
        
        // Jika Product Name kosong, tampilkan pesan error
        if (productName.trim() === "") {
            alert("Please enter a valid product name.");
            return;
        }

        // Jika tidak ada pesan error, submit form
        if (errorMessage === "") {
            alert("Form submitted successfully!");
        } else {
            alert(errorMessage);
        }
    };

    return (
        <div>
            <h2>Detail Product</h2>
            <form onSubmit={validateForm}>
                <label htmlFor="productName">Product Name: </label>
                <br />
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                    required
                />
                <br />
                {/* Menampilkan error message jika ada */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <br />
                <input type="submit" value="Create Product" />
            </form>
        </div>
    );
};

export default CreateProduct;
