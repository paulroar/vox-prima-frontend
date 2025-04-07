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
          {/* Line 1: Logo and icons */}
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

          {/* Line 2: Tagline */}
          <div className="navbar__tagline">
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
