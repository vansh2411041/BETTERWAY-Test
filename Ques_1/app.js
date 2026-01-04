import { useEffect, useMemo, useState } from "react";
import ProductList from "./productlist";
import Filters from "./filters";
import Cart from "./cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const withStock = data.slice(0, 16).map(p => ({
          ...p,
          stock: Math.floor(Math.random() * 5) + 1
        }));
        setProducts(withStock);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter(p => p.category === category);
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        if (existing.qty < product.stock) {
          return prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return prev;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev =>
      prev
        .map(i => (i.id === id ? { ...i, qty } : i))
        .filter(i => i.qty > 0)
    );
  };

  return (
    <div className="app">
      <h1>Mini E-Commerce</h1>

      <Filters
        products={products}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <Cart cart={cart} updateQty={updateQty} />

      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;