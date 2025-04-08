import React, { createContext, useState, useEffect } from 'react';
import {
  getCart as localGetCart,
  saveCart as localSaveCart
} from '../utils/cartUtils';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(localGetCart());
  }, []);

  const saveAndUpdate = (updatedCart) => {
    setCartItems(updatedCart);
    localSaveCart(updatedCart);
  };

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item._id === product._id);
    let updatedCart;

    if (existing) {
      updatedCart = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    saveAndUpdate(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity } : item
    );
    saveAndUpdate(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    saveAndUpdate(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
