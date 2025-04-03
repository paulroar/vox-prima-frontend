import React from 'react';
import '../Footer/Footer.css'; 
import footerLogo from '../../assets/vox-prima-footer-logo.png';


const Footer = () => {
  return (
    <footer className="vox-footer">
      <div className="footer-content">
        {/* Logo */}
        <img
          src={footerLogo}
          alt="VÖX PRIMA Logo"
          className="footer-logo"
        />

        {/* Tagline */}
        <p className="footer-tagline">Designed to express. Built to last.</p>

        {/* Links */}
        <div className="footer-links">
          <a href="https://github.com/seuusuario/seurepositorio" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#">Instagram</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">&copy; {new Date().getFullYear()} VÖX PRIMA — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
