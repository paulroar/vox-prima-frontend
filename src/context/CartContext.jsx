import React, { createContext, useState, useEffect } from 'react';
import { getCart, saveCart } from '../utils/cartUtils';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const addToCart = (item) => {
    const existing = cartItems.find(i => i._id === item._id);
    let updatedCart;

    if (existing) {
      updatedCart = cartItems.map(i =>
        i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter(i => i._id !== id);
    setCartItems(updated);
    saveCart(updated);
  };

  const updateQuantity = (id, qty) => {
    const updated = cartItems.map(i =>
      i._id === id ? { ...i, quantity: qty } : i
    );
    setCartItems(updated);
    saveCart(updated);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};