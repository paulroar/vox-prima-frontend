import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { UserContext } from '../context/UserContext';

const OrderSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const token = user?.token || localStorage.getItem('token');
      try {
        const res = await api.get(`/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrder(res.data);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      }
    };

    fetchOrder();
  }, [id, user]);

  if (!order) return <p style={{ padding: '2rem' }}>Loading order details...</p>;

  return (
    <div className="order-success-container">
      <h2>Thank you for your purchase, {user?.name}!</h2>
      <p>Your order was placed successfully.</p>

      <div className="order-summary">
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Status:</strong> {order.deliveryStatus}</p>
        <p><strong>Placed on:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
        <p><strong>Total:</strong> {order.totalPrice.toFixed(2)}€</p>
      </div>

      <h3>Items</h3>
      <ul className="order-items">
        {order.orderItems.map((item, index) => (
          <li key={index} className="order-item">
            <span>{item.name}</span>
            <span>Qty: {item.quantity}</span>
            <span>{(item.price * item.quantity).toFixed(2)}€</span>
          </li>
        ))}
      </ul>

      <div className="order-actions">
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
        <button onClick={() => navigate('/orders')}>View My Orders</button>
      </div>
    </div>
  );
};

export default OrderSuccess;
