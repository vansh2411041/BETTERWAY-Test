function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p><strong>₹ {product.price}</strong></p>
      <p>Category: {product.category}</p>

      <p
        className={product.inStock ? "stock in" : "stock out"}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        disabled={!product.inStock}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
