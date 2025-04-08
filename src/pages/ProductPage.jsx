import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
//import { addToCart } from '../utils/cartUtils';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';



const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    api.get(`/products/${id}`)
      .then(data => setProduct(data))
      .catch(err => {
        console.error('Error loading product:', err);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    toast.success('Product added to cart!');
  };

  if (!product) return <p style={{ padding: '2rem' }}>Loading product...</p>;

  return (
    <div className="product-page">
      <div className="product-container">

         {/* Thumbnails - Desktop */}
         <div className="product-thumbnails desktop-only">
          <img src={product.image} className="thumb variant1" alt="variant1" />
          <img src={product.image} className="thumb variant2" alt="variant2" />
        </div>
        
        {/* Main Image */}
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-main-image"
          />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <span className="product-price">{product.price.toFixed(2)}€</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
