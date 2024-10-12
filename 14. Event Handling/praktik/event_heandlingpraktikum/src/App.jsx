import React from "react";
import FormCreateProduct from "./FormCreateProduct";
import { article } from "./article/articleData";

const App = () => {
  return (
    <div className="App">
      <h1>{article.title.en}</h1>
      <p>{article.description.en}</p>

      <FormCreateProduct />
    </div>
  );
};

export default App; 