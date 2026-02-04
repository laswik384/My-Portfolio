import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

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
            <Code2 size={32} />
          </div>
          <h3 className="about-card-title">Frontend Development</h3>
          <p className="about-card-text">
            Dynamic Frontend Developer at Talentivid Pvt Ltd with strong expertise in HTML, CSS, JavaScript, TypeScript, React, AngularJS, Bootstrap, and Tailwind CSS.
          </p>
        </div>

        <div className="about-card glass-card">
          <div className="about-icon">
            <Palette size={32} />
          </div>
          <h3 className="about-card-title">UI/UX Design</h3>
          <p className="about-card-text">
            Experienced in building responsive, performance-driven applications with a solid foundation in UI/UX using Figma. Creating seamless user experiences is my passion.
          </p>
        </div>

        <div className="about-card glass-card">
          <div className="about-icon">
            <Rocket size={32} />
          </div>
          <h3 className="about-card-title">Clean Architecture</h3>
          <p className="about-card-text">
            Passionate about clean code, collaboration, and scalable frontend architecture. Building maintainable applications that stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;