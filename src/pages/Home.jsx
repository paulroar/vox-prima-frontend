import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-placeholder">
        <h1>Welcome</h1>
        <p>Art that speaks. Shirts that stand out.</p>
        <Link to="/products" className="shop-btn">Explore Collection</Link>
      </section>

      <section className="home-featured">
        <h2>Featured Designs</h2>
      </section>

      <section className="home-about">
        <h3>About VÖX PRIMA</h3>
        <p>We create wearable art with meaning. Every shirt is a story.</p>
      </section>
    </div>
  );
};

export default Home;