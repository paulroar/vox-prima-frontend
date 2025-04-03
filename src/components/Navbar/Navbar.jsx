import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FiUser, FiShoppingBag } from 'react-icons/fi';
import UserMenuOffCanvas from '../UserMenuOffCanvas/UserMenuOffCanvas';
import LoginOffCanvas from '../LoginOffCanvas/LoginOffCanvas';
import { UserContext } from '../../context/UserContext';


const Navbar = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);

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
          {/* Left: Logo */}
          <div className="navbar__logo">
            <Link to="/">VÖX PRIMA</Link>
          </div>

          {/* Center: Tagline */}
          <div className="navbar__tagline">
            <Link to="/products">Find your style</Link>
          </div>

          {/* Right: Icons */}
          <div className="navbar__icons">
            <button
              onClick={() => {
                isLoggedIn ? setShowUserMenu(true) : setShowLoginMenu(true);
              }}
              className="icon-btn"
              aria-label="User"
            >
              <FiUser
                className={`navbar__icon ${isLoggedIn ? "active" : ""}`}
              />
            </button>

            <Link to="/cart" aria-label="Cart">
              <FiShoppingBag className="navbar__icon" />
            </Link>
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