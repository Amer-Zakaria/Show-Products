import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./components/product";
import textCutter from "./utils/textCutter";

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const result = await axios("https://fakestoreapi.com/products").catch(
      (err) => {
        alert(err);
      }
    );
    FIXME: if (result?.data.status >= 400) {
      alert(result.data.message);
    } else {
      for (const product of result.data) {
        product.quantitySold = Math.floor(Math.random() * product.rating.count);
        const strength = (product.quantitySold * 100) / product.rating.count;
        product.soldStrength = strength;
        product.number = 1;
        product.cutProductDescription = textCutter(product.description, 150);
        product.expand = false;
      }
      setProducts(result.data.slice(0, result.data.length - 1));
    }
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

  const handleExpand = (productId) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) product.expand = !product.expand;
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
            onExpand={handleExpand}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
