import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
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

        {/* Right 3D Scene */}
        <div className="hero-3d">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;