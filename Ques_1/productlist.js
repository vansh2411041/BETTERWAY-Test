import ProductCard from "./productcard";

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;