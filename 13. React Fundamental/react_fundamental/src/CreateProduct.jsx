import React, {useState} from "react";

const CreateProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const validateForm = (e) => {
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

    return(
        <div>
            <h1>Create Product</h1>
            <h2>Detail Product</h2>
            <form onSubmit={validateForm}>
                <label htmlfor="productName">Product Name: </label>
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
                <br />

                <label htmlfor="productCategory">Product Category: </label>
                <br />
                <select id="productCategory" name="productCategory" required>
                    <option value="" disable selected></option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing</option>
                </select>
                <br /> 
                <br />

                <label htmlfor="productFreshness">Product Freshness: </label>
                <br />
                <input
                type="radio"
                id="BrandNew"
                name="productFreshness"
                value="BrandNew"
                required
                />
                <label htmlfor="BrandNew">Brand New</label>
                <br />

                <input 
                type="radio"
                id="SecondHank"
                name="'productFreshness"
                value="SecondHank"
                required
                />
                <label htmlfor="SecondHank">Seceond Hank</label>
                <br />

                <input
                type="radio"
                id="Refurbished"
                name="'productFreshness"
                value="Refurbished"
                required
                />
                <label htmlFor="Refurbished">Refurbished</label>
                <br />
                <br />

                <label htmlfor="image">Image of Product: </label>
                <input type="file" id="image" name="image" required />
                <br /> 
                <br />

                <label htmlfor="description">Additional Description: </label>
                <br />
                <textarea id="description" name="description" rows="4" cols="50"></textarea>
                <br />
                <br />

                <label htmlfor="productPrice">Product Price: </label>
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
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};


export default CreateProduct;