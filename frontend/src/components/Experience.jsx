import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>
      </div>

      <div className="experience-timeline">
        <div className="experience-card glass-card">
          <div className="experience-header">
            <div className="experience-icon">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="experience-title">Frontend Developer</h3>
              <p className="experience-company">Talentivid Pvt Ltd</p>
            </div>
          </div>

          <div className="experience-meta">
            <span className="experience-period">
              <Calendar size={16} />
              Oct 2024 – Present
            </span>
            <span className="experience-location">Hyderabad, India</span>
          </div>

          <ul className="experience-list">
            <li>Responsive and scalable UI components</li>
            <li>Mobile-first, high-performance web apps</li>
            <li>Cross-browser compatibility</li>
            <li>API integration and UI/UX collaboration</li>
            <li>Performance optimization and clean code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;