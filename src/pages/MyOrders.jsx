import React, { useEffect, useState } from 'react';
import api from '../services/api';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await api.get('/orders/my-orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Orders</h2>
      {orders.map(order => (
        <div key={order._id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Total:</strong> {order.totalPrice}€</p>
          <p><strong>Status:</strong> {order.deliveryStatus}</p>
          <ul>
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
