function Cart({ cart, updateQty }) {
  const totalItems = cart.reduce((a, c) => a + c.qty, 0);
  const totalPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Empty cart</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>

          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
          <span>{item.qty}</span>
          <button
            onClick={() =>
              item.qty < item.stock && updateQty(item.id, item.qty + 1)
            }
          >
            +
          </button>
        </div>
      ))}

      <hr />
      <p>Total items: {totalItems}</p>
      <p>Total price: ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;