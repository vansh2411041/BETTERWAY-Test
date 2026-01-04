import { useEffect, useState } from "react";
import ProductCard from "./productcard";
import Cart from "./cart";
import "./app.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const updatedProducts = data.slice(0, 16).map(p => ({
          ...p,
          inStock: Math.random() > 0.3
        }));
        setProducts(updatedProducts);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>Mini E-Commerce</h1>

      <Cart cart={cart} />

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
