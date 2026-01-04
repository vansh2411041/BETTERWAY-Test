function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Cart ({cart.length})</h2>

      {cart.length === 0 && <p>No items added</p>}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;