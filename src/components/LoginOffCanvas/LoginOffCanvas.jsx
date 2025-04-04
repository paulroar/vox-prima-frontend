import React, { useState, useContext } from 'react';
import { FiX, FiUser } from 'react-icons/fi';
import './LoginOffCanvas.css';
import { UserContext } from '../../context/UserContext';
import api from '../../services/api';


const LoginOffCanvas = ({ isOpen, onClose }) => {
  const { login } = useContext(UserContext);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const data = await api.post('/users/login', form);

      if (data.token) {
        login(data);
        onClose();
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Login error');
      console.error(err);
    }
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={onClose} />
      <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <h3><FiUser /> Sign in to your account</h3>
          <button className="close-btn" onClick={onClose}><FiX /></button>
        </div>

        <div className="login-form">
          <div className="social-login">
            <p>Sign in with:</p>
            <div className="social-icons">
              <button className="google-btn">G</button>
              <button className="facebook-btn">f</button>
            </div>
            <p className="or">or</p>
          </div>

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={form.password}
            onChange={handleChange}
          />

          <button className="submit-btn" onClick={handleLogin}>SIGN IN →</button>

          <div className="links">
            <a href="#">Forgot password?</a>
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOffCanvas;
