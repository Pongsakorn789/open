import React, { useEffect, useRef } from 'react';
import '../styles/pages/services.css';

const Services = () => {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const orbsRef = useRef([]);

  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    
    // Mouse tracking effect for cursor
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      
      // Parallax effect for orbs
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          const speed = 0.05 + (index * 0.02);
          const x = (e.clientX - window.innerWidth / 2) * speed;
          const y = (e.clientY - window.innerHeight / 2) * speed;
          orb.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.visibility = 'visible';
        cursor.classList.add('active');
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.visibility = 'hidden';
        cursor.classList.remove('active');
      }
    };

    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseenter', handleMouseEnter);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseenter', handleMouseEnter);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="services-page">
      {/* Mouse cursor effect */}
      <div ref={cursorRef} className="services-cursor"></div>
      
      {/* Hero Section */}
      <section ref={heroRef} className="services-hero">
        {/* Animated Background Elements */}
        <div className="hero-effects">
          {/* Gradient Orbs */}
          <div ref={el => orbsRef.current[0] = el} className="gradient-orb orb-1"></div>
          <div ref={el => orbsRef.current[1] = el} className="gradient-orb orb-2"></div>
          <div ref={el => orbsRef.current[2] = el} className="gradient-orb orb-3"></div>
          <div ref={el => orbsRef.current[3] = el} className="gradient-orb orb-4"></div>
          
          {/* Geometric Shapes */}
          <div className="geometric-shapes">
            <div className="shape circle-1"></div>
            <div className="shape circle-2"></div>
            <div className="shape square-1"></div>
            <div className="shape hexagon-1"></div>
            <div className="shape circle-3"></div>
          </div>
          
          {/* Pulsing Rings */}
          <div className="pulsing-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
          
          {/* Ripple Effects */}
          <div className="ripple-container">
            <div className="ripple ripple-1"></div>
            <div className="ripple ripple-2"></div>
            <div className="ripple ripple-3"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="services-hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="services-title">Our Services</h1>
              <p className="services-subtitle">
                Discover our comprehensive range of digital solutions designed to elevate your business to new heights
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Content Section */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>Web Development</h3>
              <p>Creating responsive and modern web applications</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile solutions</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>UI/UX Design</h3>
              <p>User-centered design for optimal experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;