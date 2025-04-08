import React, { useEffect, useState } from 'react';
import api from '../services/api';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      try {
        const data = await api.get('/orders/my-orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Total:</strong> {order.totalPrice}€</p>
          <p><strong>Status:</strong> {order.deliveryStatus}</p>
          <ul className="order-items">
            {order.orderItems.map(item => (
              <li key={item.product?._id}>
                {item.name} — Qty: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
