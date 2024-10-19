import React from "react";
import CreateProduct from "./components/CreateProduct";

const App = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productFreshness, setProductFreshness] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(productName)) {
      newErrors.productName = 'Product name must contain only letters and at least 3 characters';
    }
 
    if (productCategory === 'Choose...' || productCategory === '') {
      newErrors.productCategory = 'Please select a product category';
    }

    if (!productFreshness) {
      newErrors.productFreshness = 'Please select product freshness';
    }

    if (productPrice <= 0 || isNaN(productPrice)) {
      newErrors.productPrice = 'Product price must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted Successfully');
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <CreateProduct
      productName={productName}
      setProductName={setProductName}
      productCategory={productCategory}
      setProductCategory={setProductCategory}
      productFreshness={productFreshness}
      setProductFreshness={setProductFreshness}
      productPrice={productPrice}
      setProductPrice={setProductPrice}
      errors={errors}
      handleSubmit={handleSubmit}
    />
  );
};

export default App;
