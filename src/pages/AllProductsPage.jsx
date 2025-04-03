import React, { useEffect, useState } from 'react';
// import axios from '../services/api';
import { Link } from 'react-router-dom';


/* const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error loading products:', err));
  }, []);

  return (
    <div className="all-products-page">
      <h2>All Shirts</h2>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/product/${product._id}`} key={product._id} className="product-card">
            <img src={`http://localhost:5000${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)}€</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;*/

// src/pages/AllProductsPage.jsx


const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  return (
    <main className="all-products-container">
      <h2 className="page-title">All Products</h2>
      <div className="products-grid">
        {products.map(product => (
         <Link
         to={`/product/${product._id}`}
         key={product._id}
         className="product-card"
       >
         <div className="image-wrapper">
           <img
             src={product.image}
             alt={product.name}
             loading="lazy"
             className="product-image"
           />
         </div>
         <div className="product-info">
           <h3>{product.name}</h3>
           <p>{product.description}</p>
           <span>${product.price.toFixed(2)}</span>
         </div>
       </Link>
     ))}
   </div>
    </main>
  );
};

export default AllProductsPage;

