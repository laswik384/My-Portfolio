import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiencesData = [
  {
    title: 'Frontend Developer',
    company: 'Talentivid Pvt Ltd',
    location: 'Hyderabad, India',
    period: 'Oct 2024 – Present',
    responsibilities: [
      'Responsive and scalable UI components',
      'Mobile-first, high-performance web apps',
      'Cross-browser compatibility',
      'API integration and UI/UX collaboration',
      'Performance optimization and clean code'
    ]
  },
  {
    title: 'Frontend Development with UI/UX',
    company: 'Baghara Khana',
    location: 'Hyderabad, India',
    period: 'Jan 2026',
    responsibilities: [
      'React + Vite restaurant website',
      'Reusable UI components',
      'Menu categorization & highlights',
      'Swiggy & Zomato integration',
      'Performance optimization'
    ]
  }
];

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