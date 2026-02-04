import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experiencesData } from '../data/portfolioData';

const Experience = () => {

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>
      </div>

      <div className="experience-timeline">
        {experiencesData.map((exp, index) => (
          <div key={index} className="experience-card glass-card">
            <div className="experience-header">
              <div className="experience-icon">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
            </div>

            <div className="experience-meta">
              <span className="experience-period">
                <Calendar size={16} />
                {exp.period}
              </span>
              <span className="experience-location">{exp.location}</span>
            </div>

            <ul className="experience-list">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;