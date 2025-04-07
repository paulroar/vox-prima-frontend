import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import UserMenuOffCanvas from "../UserMenuOffCanvas/UserMenuOffCanvas";
import LoginOffCanvas from "../LoginOffCanvas/LoginOffCanvas";
import { UserContext } from "../../context/UserContext";
import { getCart } from "../../utils/cartUtils";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const cartItems = getCart();

  return (
    <>
      <nav className="navbar">
        <UserMenuOffCanvas
          isOpen={showUserMenu}
          onClose={() => setShowUserMenu(false)}
        />
        <LoginOffCanvas
          isOpen={showLoginMenu}
          onClose={() => setShowLoginMenu(false)}
        />

        <div className="navbar__container">
          {/* Linha 1: Logo e ícones */}
          <div className="navbar__top-row">
            <div className="navbar__logo">
              <Link to="/">VÖX PRIMA</Link>
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

          {/* Linha 2: Tagline */}
          <div className="navbar__tagline">
            <Link to="/products">Find your style</Link>
          </div>
        </div>
      </nav>
      
      {/* OffCanvas Menu */}
      <UserMenuOffCanvas
        isOpen={showUserMenu}
        onClose={() => setShowUserMenu(false)}
      />
    </>
  );
};

export default Navbar;
