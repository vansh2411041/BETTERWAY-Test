function ProductCard({ product, addToCart }) {
  const outOfStock = product.stock === 0;

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <p className={outOfStock ? "out" : "in"}>
        {outOfStock ? "Out of stock" : `In stock (${product.stock})`}
      </p>

      <button disabled={outOfStock} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;