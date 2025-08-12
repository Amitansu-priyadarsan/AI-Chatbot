import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "LangChain has revolutionized how we handle customer interactions. The AI responses are incredibly natural and contextually aware.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateLab",
      content: "Building AI-powered features has never been easier. The integration was seamless and the performance is outstanding.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "We've seen a 40% improvement in user engagement since implementing LangChain. It's a game-changer for our platform.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of developers and companies who trust LangChain</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 