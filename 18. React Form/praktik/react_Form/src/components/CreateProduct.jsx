import React from 'react';

const CreateProduct = ({
  productName,
  setProductName,
  productCategory,
  setProductCategory,
  productFreshness,
  setProductFreshness,
  productPrice,
  setProductPrice,
  errors,
  handleSubmit
}) => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="w-[1440px] bg-white shadow-lg">
        <header className="bg-gray-200">
          {/* ... Navbar code ... */}
        </header>

        {/* Create Product Section */}
        <section className="flex flex-col items-center mt-6">
          <div className="w-[936px] bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mt-4">Create Product</h2>

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
