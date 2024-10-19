import React, { useState } from "react";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [errors, setErrors] = useState({});

  // Validasi menggunakan regex
  const validateForm = () => {
    const newErrors = {};

    // Validasi Product Name (minimal 3 karakter, hanya huruf)
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(productName)) {
      newErrors.productName = "Product name must contain only letters and at least 3 characters.";
    }

    // Validasi Product Category (tidak boleh 'Choose...')
    if (productCategory === "Choose..." || productCategory === "") {
      newErrors.productCategory = "Please select a valid product category.";
    }

    // Validasi Product Freshness (wajib memilih salah satu)
    if (!productFreshness) {
      newErrors.productFreshness = "Please select product freshness.";
    }

    // Validasi Product Price (harus angka positif)
    if (productPrice <= 0 || isNaN(productPrice)) {
      newErrors.productPrice = "Product price must be a positive number.";
    }

    // Validasi Image (harus memilih file)
    if (!productImage) {
      newErrors.productImage = "Please upload a product image.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simpan data dalam tabel (nanti diimplementasikan)
      console.log("Form Submitted Successfully", {
        productName,
        productCategory,
        productFreshness,
        productPrice,
        productImage,
      });
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="w-[1440px] bg-white shadow-lg">
       {/* Header */}
       <header className="bg-gray-200">
          <nav className="bg-white w-full h-[60px] shadow-[0_1px_8px_0_rgba(0,0,0,0.2)] flex justify-between items-center px-[16px] lg:px-[34px] gap-[16px]">
            {/* Title */}
            <h2 className="font-['Roboto'] text-[#212529] text-[24px] font-medium leading-[28.13px] tracking-[-0.32px] m-0">
              Simple Header
            </h2>
            {/* Navigation Menu */}
            <ul className="flex list-none gap-[16px]">
              {/* Home - Active */}
              <li className="active">
                <a
                  href="#"
                  className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              {/* Features */}
              <li>
                <a
                  href="#"
                  className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              {/* Pricing */}
              <li>
                <a
                  href="#"
                  className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              {/* FAQs */}
              <li>
                <a
                  href="#"
                  className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              {/* About */}
              <li>
                <a
                  href="#"
                  className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="flex flex-col items-center mt-6">
          <div className="w-[936px] bg-white shadow-lg rounded-lg p-8 mb-8">
            <div className="flex flex-col items-center text-center mb-8 mx-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              className="w-12 mx-auto"
              alt="Bootstrap Logo"
            />
            <h2 className="text-2xl font-semibold mt-4">Create Product</h2>
            <p className="font-roboto text-[20px] text-[#212529] mt-2">
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
            </p>
          </div>

            <form className="space-y-6 w-[656px] mx-[100px]" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className={`mt-1 block w-full p-2 border ${errors.productName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                {errors.productName && <p className="text-red-500 text-sm">{errors.productName}</p>}
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Product Category
                </label>
                <select
                  id="category"
                  className={`mt-1 block w-full p-2 border ${errors.productCategory ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                >
                  <option>Choose...</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
                {errors.productCategory && <p className="text-red-500 text-sm">{errors.productCategory}</p>}
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image of Product
                </label>
                <input
                  type="file"
                  id="image"
                  className={`mt-1 block w-full text-sm ${errors.productImage ? 'border-red-500' : 'border-gray-300'} border rounded-md`}
                  onChange={handleImageChange}
                />
                {errors.productImage && <p className="text-red-500 text-sm">{errors.productImage}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Product Freshness</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="brand-new"
                      name="freshness"
                      type="radio"
                      value="Brand New"
                      checked={productFreshness === 'Brand New'}
                      onChange={(e) => setProductFreshness(e.target.value)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="brand-new" className="ml-3 block text-sm font-medium text-gray-700">Brand New</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="second-hand"
                      name="freshness"
                      type="radio"
                      value="Second Hand"
                      checked={productFreshness === 'Second Hand'}
                      onChange={(e) => setProductFreshness(e.target.value)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="second-hand" className="ml-3 block text-sm font-medium text-gray-700">Second Hand</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="refurbished"
                      name="freshness"
                      type="radio"
                      value="Refurbished"
                      checked={productFreshness === 'Refurbished'}
                      onChange={(e) => setProductFreshness(e.target.value)}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label htmlFor="refurbished" className="ml-3 block text-sm font-medium text-gray-700">Refurbished</label>
                  </div>
                </div>
                {errors.productFreshness && <p className="text-red-500 text-sm">{errors.productFreshness}</p>}
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                <input
                  type="number"
                  id="price"
                  className={`mt-1 block w-full p-2 border ${errors.productPrice ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
                {errors.productPrice && <p className="text-red-500 text-sm">{errors.productPrice}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateProduct;
