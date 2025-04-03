import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getCart, saveCart } from '../utils/cartUtils';
import { UserContext } from '../context/UserContext';


const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  const handleCheckout = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await api.post(
        '/orders',
        {
          orderItems: cartItems.map(item => ({
            product: item._id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          totalPrice,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      saveCart([]);
      navigate(`/order-success/${response.data._id}`);
    } catch (error) {
      console.error('Failed to place order:', error);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-section">
        <h2>1. Identification</h2>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>

      <div className="checkout-section">
        <h2>2. Delivery</h2>
        <p>40 Triq il-Kunzar, L-Imsida</p>
        <p>Malta - Postal Code: MSD1140 </p>
        <p><strong>EMS</strong> - Estimated delivery: April 16</p>
      </div>

      <div className="checkout-section">
        <h2>3. Payment</h2>
        <p>💳 Credit Card (Mock)</p>
        <p>💰 Direct debit (Mock)</p>
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cartItems.map(item => (
          <div key={item._id}>
            <p>{item.name} - {item.quantity} x {item.price.toFixed(2)}€</p>
          </div>
        ))}
        <h3>Total: {totalPrice.toFixed(2)}€</h3>
        <button onClick={handleCheckout} className="checkout-button">
          Finish Order →
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
