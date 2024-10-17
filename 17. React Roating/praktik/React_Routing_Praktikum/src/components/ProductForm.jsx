import React from "react";

const ProductForm = ({ addProduct }) => {
    const [formData, setFormData] = useState({
      productName: '',
      category: '',
      image: '',
      freshness: 'Brand New',
      description: '',
      price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({
          productName: '',
          category: '',
          image: '',
          freshness: 'Brand New',
          description: '',
          price: '',
        });
      };
      return (
        <section className="flex flex-col items-center mt-6">
          <div className="w-full max-w-[936px] bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mt-4">Create Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[656px] mx-auto">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                  <option>Choose...</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image of Product</label>
                <input type="file" name="image" onChange={(e) => setFormData({ ...formData, image: e.target.files[0].name })} className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Freshness</label>
                <div className="mt-2 space-y-2">
                  <div>
                    <input type="radio" name="freshness" value="Brand New" checked={formData.freshness === 'Brand New'} onChange={handleChange} />
                    <label className="ml-3 block text-sm font-medium text-gray-700">Brand New</label>
                  </div>
                  <div>
                    <input type="radio" name="freshness" value="Second Hand" checked={formData.freshness === 'Second Hand'} onChange={handleChange} />
                    <label className="ml-3 block text-sm font-medium text-gray-700">Second Hand</label>
                  </div>
                  <div>
                    <input type="radio" name="freshness" value="Refurbished" checked={formData.freshness === 'Refurbished'} onChange={handleChange} />
                    <label className="ml-3 block text-sm font-medium text-gray-700">Refurbished</label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Additional Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </section>
      );
    };

export default ProductForm;