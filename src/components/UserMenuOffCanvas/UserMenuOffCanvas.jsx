import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiUser, FiTruck, FiRefreshCcw, FiGift, FiHeart, FiTag, FiLogOut } from 'react-icons/fi';
import { UserContext } from '../../context/UserContext';
import './UserMenuOffCanvas.css'; 


const UserMenuOffCanvas = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  const goTo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={onClose} />
      <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <h3>Hello, {user?.name || 'User'} :)</h3>
          <button className="close-btn" onClick={onClose}><FiX /></button>
        </div>

        <ul className="menu-list">
          <li onClick={() => goTo('/profile')}><FiUser /> My Profile</li>
          <li onClick={() => goTo('/orders')}><FiTruck /> My Orders</li>
          <li onClick={() => goTo('/returns')}><FiRefreshCcw /> Returns</li>
          <li onClick={() => goTo('/cashback')}><FiGift /> My Cashback</li>
          <hr />
          <li onClick={() => goTo('/wishlist')}><FiHeart /> Wishlist</li>
          <li onClick={() => goTo('/coupons')}><FiTag /> Coupons</li>
          <li onClick={handleLogout}><FiLogOut /> Sign out</li>
        </ul>
      </div>
    </>
  );
};

export default UserMenuOffCanvas;
