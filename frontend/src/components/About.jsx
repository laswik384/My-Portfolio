import React from 'react';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        <div className="about-card glass-card">
          <div className="about-icon">
            <Code2 size={36} />
          </div>
          <h3 className="about-card-title">Frontend Expert</h3>
          <p className="about-card-text">
            Dynamic Frontend Developer at Talentivid Pvt Ltd with deep expertise in
            HTML, CSS, JavaScript, TypeScript, React, and AngularJS. Crafting pixel-perfect
            interfaces with Bootstrap and Tailwind CSS.
          </p>
        </div>

        <div className="about-card glass-card">
          <div className="about-icon">
            <Palette size={36} />
          </div>
          <h3 className="about-card-title">UI/UX Designer</h3>
          <p className="about-card-text">
            Building responsive, performance-driven applications with a solid foundation
            in UI/UX using Figma. Creating seamless user experiences that delight and engage users.
          </p>
        </div>

        <div className="about-card glass-card">
          <div className="about-icon">
            <Rocket size={36} />
          </div>
          <h3 className="about-card-title">Performance Driven</h3>
          <p className="about-card-text">
            Passionate about clean code, collaboration, and scalable frontend architecture.
            Building maintainable, high-performance applications with modern best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;