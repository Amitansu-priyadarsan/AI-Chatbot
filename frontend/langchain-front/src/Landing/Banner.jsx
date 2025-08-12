import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-badge">
            <span>🚀</span>
            <span>Limited Time Offer</span>
          </div>
          <h2>Get Early Access to Premium Features</h2>
          <p>
            Join our beta program and be among the first to experience advanced AI capabilities, 
            priority support, and exclusive integrations.
          </p>
          <div className="banner-features">
            <div className="feature-item">
              <span>✅</span>
              <span>Advanced AI Models</span>
            </div>
            <div className="feature-item">
              <span>✅</span>
              <span>Priority Support</span>
            </div>
            <div className="feature-item">
              <span>✅</span>
              <span>Custom Integrations</span>
            </div>
          </div>
          <div className="banner-actions">
            <button className="btn-primary btn-large">Join Beta Now</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div className="banner-visual">
          <div className="banner-illustration">
            <div className="rocket">🚀</div>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 