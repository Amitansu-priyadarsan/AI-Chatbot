import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: "🔧",
      title: "Setup & Configure",
      description: "Install LangChain and configure your AI models with just a few lines of code.",
      details: "Choose from multiple AI providers and customize your configuration"
    },
    {
      id: 2,
      icon: "🤖",
      title: "Build Your Agent",
      description: "Create intelligent agents using our intuitive API and pre-built components.",
      details: "Leverage existing chains or build custom ones for your specific use case"
    },
    {
      id: 3,
      icon: "🔗",
      title: "Connect & Integrate",
      description: "Seamlessly integrate with your existing applications and data sources.",
      details: "Connect to databases, APIs, and external services with built-in connectors"
    },
    {
      id: 4,
      icon: "🚀",
      title: "Deploy & Scale",
      description: "Deploy your AI applications and scale them according to your needs.",
      details: "Monitor performance and optimize your agents in production"
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2>How It Works</h2>
          <p>Get started with LangChain in four simple steps</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-item">
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <p className="step-details">{step.details}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="how-it-works-cta">
          <button className="btn-primary btn-large">Start Building Now</button>
          <p>No credit card required • Free tier available</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 