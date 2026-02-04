import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Floating 3D Illustrations in Background */}
      <div className="floating-illustration floating-illustration-1">
        <img 
          src="https://images.unsplash.com/photo-1645097114684-28afb6d41c8d?w=400&q=80" 
          alt="3D Object"
          style={{ opacity: 0.15, filter: 'blur(1px)' }}
        />
      </div>
      <div className="floating-illustration floating-illustration-2">
        <img 
          src="https://images.unsplash.com/photo-1649702901563-33dd7dffb931?w=400&q=80" 
          alt="3D Geometric"
          style={{ opacity: 0.1, filter: 'blur(2px)' }}
        />
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} style={{ display: 'inline', marginRight: '8px' }} />
            Frontend / Web Developer
          </div>
          
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="text-gradient">
              Satya Laswik Pakki
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Building responsive, scalable, and high-performance web experiences
            with cutting-edge technologies and modern design principles
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={20} />
            </a>
            <a href="#connect" className="btn-secondary">
              Let's Connect
            </a>
          </div>

          {/* Floating Tech Icons */}
          <div className="tech-icons">
            <div className="tech-icon" style={{ animationDelay: '0s' }}>HTML5</div>
            <div className="tech-icon" style={{ animationDelay: '0.2s' }}>CSS3</div>
            <div className="tech-icon" style={{ animationDelay: '0.4s' }}>JavaScript</div>
            <div className="tech-icon" style={{ animationDelay: '0.6s' }}>React</div>
            <div className="tech-icon" style={{ animationDelay: '0.8s' }}>TypeScript</div>
            <div className="tech-icon" style={{ animationDelay: '1s' }}>Tailwind</div>
          </div>
        </div>

        {/* Right 3D Scene - Beautiful floating abstract object */}
        <div className="hero-3d">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
          {/* Additional 3D Illustration */}
          <div className="hero-3d-illustration">
            <img 
              src="https://images.unsplash.com/photo-1644849179736-13def14ef978?w=600&q=80" 
              alt="3D Gradient"
              style={{ opacity: 0.6, mixBlendMode: 'screen' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;