import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products', err));
  }, []);

  const recentlyAdded = products.slice(0, 4); 

  return (
    <div className="home">
      {/* HERO BANNER */}
      <section className="hero-carousel">
        <div className="hero-slide">
          <img src="https://res.cloudinary.com/SEU-CLOUD/image/upload/v1/hero1.jpg" alt="Hero 1" />
        </div>
        <div className="hero-slide">
          <img src="https://res.cloudinary.com/SEU-CLOUD/image/upload/v1/hero2.jpg" alt="Hero 2" />
        </div>
        <div className="hero-slide">
          <img src="https://res.cloudinary.com/SEU-CLOUD/image/upload/v1/hero3.jpg" alt="Hero 3" />
        </div>
      </section>

      {/* RECENTLY ADDED */}
      <section className="recently-added">
        <h2>Recently Added</h2>
        <div className="products-grid-home">
          {recentlyAdded.map(product => (
            <Link to={`/products/${product._id}`} key={product._id} className="product-card-home">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <span>{product.price.toFixed(2)}€</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;