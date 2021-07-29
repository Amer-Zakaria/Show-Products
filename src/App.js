import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./components/product";
import "./CSS/App.css";

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const result = await axios(
      "https://wawinner.its.ae/dev/public/api/v1/front-end/campaign"
    ).catch((err) => {
      alert(err);
    });

    if (result.data.status >= 400) {
      alert(result.data.message);
    }

    for (const product of result.data.data) {
      const strength = (product.quantity_sold * 100) / product.product_quantity;
      product.soldStrength = strength;
      product.number = 1;
    }

    setProducts(result.data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleNumberFocusout = (productId) => {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        if (product.number === "") product.number = "0";
        if (product.number.length > 0)
          product.number = product.number.replace(/\D/g, "");
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleIncrease = (productId) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) product.number++;
      return product;
    });
    setProducts(newProducts);
  };

  const handleDecrease = (productId) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) {
        if (product.number === 0);
        else product.number--;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleNumberChange = (productId, value) => {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        if (value < 0 && value === "") return product;
        product.number = value;
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onNumberChange={handleNumberChange}
            onNumberFocusout={handleNumberFocusout}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
