import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>LangChain App</h3>
              <p>Building the future of AI-powered applications</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with the latest features and updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 LangChain App. All rights reserved.</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 