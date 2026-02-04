import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            Frontend / Web Developer
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Satya Laswik Pakki</span>
          </h1>
          
          <p className="hero-subtitle">
            Building responsive, scalable, and high-performance web experiences
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={20} />
            </a>
            <a href="#connect" className="btn-secondary">
              Connect With Me
            </a>
          </div>

          {/* Floating Tech Icons */}
          <div className="tech-icons">
            <div className="tech-icon" style={{ animationDelay: '0s' }}>HTML</div>
            <div className="tech-icon" style={{ animationDelay: '0.2s' }}>CSS</div>
            <div className="tech-icon" style={{ animationDelay: '0.4s' }}>JS</div>
            <div className="tech-icon" style={{ animationDelay: '0.6s' }}>React</div>
            <div className="tech-icon" style={{ animationDelay: '0.8s' }}>TypeScript</div>
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