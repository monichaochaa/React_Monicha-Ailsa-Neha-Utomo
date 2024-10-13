import React from 'react';
import { Link } from 'react-router-dom'; 

const CreateProduct = () => {
  return (
    <div className="w-[1440px] bg-white shadow-lg">
      {/* Header */}
      <header className="bg-gray-200">
        <nav className="bg-white w-full h-[60px] shadow-[0_1px_8px_0_rgba(0,0,0,0.2)] flex justify-between items-center px-[16px] lg:px-[34px] gap-[16px]">
          <h2 className="font-['Roboto'] text-[#212529] text-[24px] font-medium leading-[28.13px] tracking-[-0.32px] m-0">
            Simple Header
          </h2>
          <ul className="flex list-none gap-[16px]">
            <li className="active">
              <a href="#" className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-[8px] h-[43px] font-bold text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white transition-colors duration-300">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Create Product Section */}
      <section className="flex flex-col items-center mt-6">
        <div className="w-[936px] bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center text-center mb-8 mx-auto">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" className="w-12 mx-auto" alt="Bootstrap Logo" />
            <h2 className="text-2xl font-semibold mt-4">Create Product</h2>
            <p className="font-roboto text-[20px] text-[#212529] mt-2">
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
            </p>
          </div>
          <form className="space-y-6 w-[656px] h-[936px] mx-[100px]">
            {/* Detail Product */}
            <div>
              <label className="font-roboto text-[23px] font-medium leading-[28.8px] text-left text-[#212529]">
                Detail Product
              </label>
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input type="text" id="productName" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>

            {/* Other Form Fields */}
            {/* Same structure for Category, Image, Product Freshness, Description, and Price fields */}

            {/* Submit Button */}
            <div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Link to="/create-product">Buat Produk Baru</Link>
    </div>
  );
};

export default CreateProduct;
