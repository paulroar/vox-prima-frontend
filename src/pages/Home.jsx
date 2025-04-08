import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products/random/all')
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div className="home">
      {/* HERO BANNER */}
      <section className="hero-carousel">
        <div className="hero-slide">
          <img src="https://res.cloudinary.com/dszajuzln/image/upload/v1744121833/kbi7egexnybaltdzgrmf.jpg" alt="Hero 1" />
        </div>
        <div className="hero-slide">
          <img src="https://res.cloudinary.com/dszajuzln/image/upload/v1744121833/u33h9fcgzqg8ttfjujj2.jpg" alt="Hero 2" />
        </div>
        <div className="hero-slide">
          <img src="https://res.cloudinary.com/dszajuzln/image/upload/v1744121832/qewynafteutxdujufiny.jpg" alt="Hero 3" />
        </div>
      </section>

      {/* RECENTLY ADDED */}
      <section className="recently-added">
        <div className="recently-header">
          <h2>Recently Added</h2>
          <Link to="/products" className="see-all">See all →</Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toFixed(2)}€</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;