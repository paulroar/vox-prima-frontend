import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import UserMenuOffCanvas from "../UserMenuOffCanvas/UserMenuOffCanvas";
import LoginOffCanvas from "../LoginOffCanvas/LoginOffCanvas";
import { UserContext } from "../../context/UserContext";
import { CartContext } from '../../context/CartContext';
//import { getCart } from "../../utils/cartUtils";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 80); 
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <UserMenuOffCanvas
          isOpen={showUserMenu}
          onClose={() => setShowUserMenu(false)}
        />
        <LoginOffCanvas
          isOpen={showLoginMenu}
          onClose={() => setShowLoginMenu(false)}
        />

        <div className="navbar__container">
          {/* Top row: logo + tagline (desktop) + icons */}
          <div className="navbar__top-row">
            <div className="navbar__logo">
              <Link to="/">VÖX PRIMA</Link>
            </div>

            <div className="navbar__tagline desktop-only">
              <Link to="/products">Find your style</Link>
            </div>

            <div className="navbar__icons">
              <button
                onClick={() => {
                  isLoggedIn ? setShowUserMenu(true) : setShowLoginMenu(true);
                }}
                className="icon-btn"
                aria-label="User"
              >
                <FiUser
                  className={`navbar__icon ${isLoggedIn ? 'active' : ''}`}
                />
              </button>

              <Link to="/cart" className="cart-icon" aria-label="Cart">
                <FiShoppingBag className="navbar__icon" />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Link>
            </div>
          </div>

          {/* Tagline for small screens */}
          <div className="navbar__tagline mobile-only">
            <Link to="/products">Find your style</Link>
          </div>
        </div>
      </nav>

      {/* Repetition to ensure menu at end of DOM */}
      <UserMenuOffCanvas
        isOpen={showUserMenu}
        onClose={() => setShowUserMenu(false)}
      />
    </>
  );
};

export default Navbar;
