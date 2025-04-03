import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';
import './index.css';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Register from './pages/RegisterPage';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';
import ProductsCart from './pages/ProductsCart';
import MyAccountPage from './pages/MyAccountPage';
import UserTest from './pages/UserTest';
import CheckoutPage from './pages/CheckoutPage';
import MyOrders from './pages/MyOrders';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
      <Routes>
        <Route path="/usertest" element={<UserTest />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<MyAccountPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ProductsCart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/order-success/:id" element={<OrderSuccess />} />

      </Routes>
      </div>
      <Footer />

    </>
  );
}



export default App;
