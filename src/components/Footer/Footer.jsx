import React from 'react';
import '../Footer/Footer.css';
import footerLogo from '../../assets/vox-prima-footer-logo.png';

const Footer = () => {
  return (
    <footer className="vox-footer">
      <div className="footer-columns">

        {/* COLUMN 1: CONTACT */}
        <div className="footer-column">
          <h4>CONTACT</h4>
          <p>hello@voxprima.com</p>
          <p>VÖX PRIMA Studio</p>
          <p>Avenida José Elias Garcia</p>
          <p>2745-143, Queluz, Portugal</p>

          <div className="footer-socials">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>

          <div className="footer-country">
            <p>Country/region</p>
            <p><strong>Portugal (EUR €)</strong></p>
          </div>
        </div>

        {/* COLUMN 2: ABOUT */}
        <div className="footer-column">
          <h4>VÖX PRIMA</h4>
          <a href="#">Size guide & care</a>
          <a href="#">Exchanges & returns</a>
          <a href="#">Order tracking</a>
          <a href="#">Shipping times</a>
          <a href="#">About our production</a>
          <a href="#">About us</a>
          <a href="#">Stores</a>
        </div>

        {/* COLUMN 3: POLICIES */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <a href="#">Terms of purchase</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
          <a href="#">Legal notice</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={footerLogo} alt="Logo" className="footer-logo" />
        <p>&copy; {new Date().getFullYear()} VÖX PRIMA — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
