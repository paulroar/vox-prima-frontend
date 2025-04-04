import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../services/api";

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      api.get('/products')
        .then(data => {
          setProducts(data);
        })
        .catch(err => {
          console.error('Error loading products:', err);
        });
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
                <span>{product.price.toFixed(2)}€</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
  };
  
  export default AllProductsPage;