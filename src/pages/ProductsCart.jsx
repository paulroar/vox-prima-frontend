import React, { useContext, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 
import LoginOffCanvas from '../components/LoginOffCanvas/LoginOffCanvas'; 

const ProductsCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const { user } = useContext(UserContext); 
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const navigate = useNavigate();

  const handleUpdateQuantity = (id, qty) => {
    if (qty < 1) return;
    updateQuantity(id, qty);
  };

  const handleRemove = (id) => {
    const item = cartItems.find((item) => item._id === id);
    if (item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const goToCheckout = () => {
    if (!user) {
      setShowLoginMenu(true); // Open login menu if user is not logged in
      return;
    }
    if (cartItems.length === 0) return;
    navigate('/checkout');
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="/images/empty-cart-stage1.jpg" alt="Empty cart" />
          <p className="empty-message">
            This cart feels like an empty stage... where’s the headliner?”
          </p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>Size: G</p>
                  <p>Color: </p>
                  <div className="cart-item-controls">
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <button onClick={() => handleRemove(item._id)}>
                      <FiTrash2 />
                    </button>
                  </div>
                  <span className="cart-delivery">🚚 Fast Delivery</span>
                </div>
                <div className="cart-price">
                  <span>{(item.price * item.quantity).toFixed(2)}€</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Summary</h3>
            <p>Subtotal: {total.toFixed(2)}€</p>
            <button className="checkout-btn" onClick={goToCheckout}>
              Checkout
            </button>
            <button className="continue-btn" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        </>
      )}

      {/* OffCanvas Login */}
      <LoginOffCanvas
        isOpen={showLoginMenu}
        onClose={() => setShowLoginMenu(false)}
      />
    </div>
  );
};

export default ProductsCart;
