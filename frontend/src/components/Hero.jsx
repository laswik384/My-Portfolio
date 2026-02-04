import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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

        {/* Right 3D Visual - Premium Developer Scene */}
        <div className="hero-3d">
          {/* 3D Floating Code Cards */}
          <div className="code-cards-scene">
            {/* Card 1 - React Component */}
            <div className="code-card card-1">
              <div className="code-card-header">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
              </div>
              <div className="code-content">
                <span className="code-purple">const</span> <span className="code-blue">Portfolio</span> = () =&gt; {'{'}
                <br/>
                  &nbsp;&nbsp;<span className="code-purple">return</span> (
                <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-green">div</span>&gt;
                <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-gray">&lt;!-- Magic --&gt;</span>
                <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-green">div</span>&gt;
                <br/>
                  &nbsp;&nbsp;)
                <br/>
                {'}'}
              </div>
            </div>

            {/* Card 2 - CSS Styles */}
            <div className="code-card card-2">
              <div className="code-card-header">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
              </div>
              <div className="code-content">
                <span className="code-purple">.hero</span> {'{'}
                <br/>
                  &nbsp;&nbsp;<span className="code-blue">display</span>: flex;
                <br/>
                  &nbsp;&nbsp;<span className="code-blue">background</span>: gradient;
                <br/>
                  &nbsp;&nbsp;<span className="code-blue">animation</span>: fade-in;
                <br/>
                {'}'}
              </div>
            </div>

            {/* Card 3 - API Response */}
            <div className="code-card card-3">
              <div className="code-card-header">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
              </div>
              <div className="code-content">
                {'{'}
                <br/>
                  &nbsp;&nbsp;<span className="code-purple">"status"</span>: <span className="code-green">"success"</span>,
                <br/>
                  &nbsp;&nbsp;<span className="code-purple">"data"</span>: {'{'}
                <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-purple">"projects"</span>: <span className="code-orange">50</span>
                <br/>
                  &nbsp;&nbsp;{'}'}
                <br/>
                {'}'}
              </div>
            </div>
          </div>

          {/* 3D Floating Tech Icons with Depth */}
          <div className="floating-tech-icons">
            <div className="tech-sphere sphere-1">React</div>
            <div className="tech-sphere sphere-2">TS</div>
            <div className="tech-sphere sphere-3">CSS</div>
            <div className="tech-sphere sphere-4">JS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;