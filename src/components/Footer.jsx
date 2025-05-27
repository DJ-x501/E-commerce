import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-slogan">
        Glow Naturally — Skincare products crafted for radiant, healthy skin.
      </div>

      <div className="footer-links">
        <a onClick={()=>navigate("/shop")}>Shop</a>
        <a onClick={()=>navigate("/contact")}>Contact US</a>
        
      </div>

      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
      </div>

      <div className="footer-copy">
        © 2025 <strong>GOOSE</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
