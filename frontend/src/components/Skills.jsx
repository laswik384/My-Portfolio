import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container">
        <div className="skill-category">
          <h3 className="skill-category-title">Frontend</h3>
          <div className="skills-cloud">
            <div className="skill-badge" style={{ animationDelay: '0s' }}>HTML</div>
            <div className="skill-badge" style={{ animationDelay: '0.1s' }}>CSS</div>
            <div className="skill-badge" style={{ animationDelay: '0.2s' }}>JavaScript</div>
            <div className="skill-badge" style={{ animationDelay: '0.3s' }}>TypeScript</div>
            <div className="skill-badge" style={{ animationDelay: '0.4s' }}>React</div>
            <div className="skill-badge" style={{ animationDelay: '0.5s' }}>AngularJS</div>
            <div className="skill-badge" style={{ animationDelay: '0.6s' }}>Bootstrap</div>
            <div className="skill-badge" style={{ animationDelay: '0.7s' }}>Tailwind CSS</div>
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">Backend & Programming</h3>
          <div className="skills-cloud">
            <div className="skill-badge" style={{ animationDelay: '0s' }}>Python</div>
            <div className="skill-badge" style={{ animationDelay: '0.1s' }}>Node.js</div>
            <div className="skill-badge" style={{ animationDelay: '0.2s' }}>SQLite</div>
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">UI/UX Tools</h3>
          <div className="skills-cloud">
            <div className="skill-badge" style={{ animationDelay: '0s' }}>Figma</div>
          </div>
        </div>

        <div className="skill-category">
          <h3 className="skill-category-title">Soft Skills</h3>
          <div className="skills-cloud">
            <div className="skill-badge" style={{ animationDelay: '0s' }}>Effective Communication</div>
            <div className="skill-badge" style={{ animationDelay: '0.1s' }}>MS Office</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;