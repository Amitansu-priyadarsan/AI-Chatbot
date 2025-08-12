import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Workflow with
            <span className="hero-highlight"> AI-Powered Solutions</span>
          </h1>
          <p className="hero-description">
            Leverage the power of LangChain to build intelligent applications that understand context, 
            learn from interactions, and deliver exceptional user experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large">Start Building</button>
            <button className="btn-secondary btn-large">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="floating-card card-1">
              <span>🤖</span>
              <p>AI Agent</p>
            </div>
            <div className="floating-card card-2">
              <span>🔗</span>
              <p>LangChain</p>
            </div>
            <div className="floating-card card-3">
              <span>⚡</span>
              <p>Fast & Smart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 