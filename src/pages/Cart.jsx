const Cart = ({ cart }) => {
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty-message">No items in cart.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <span>{item.name} - ₹{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;
  