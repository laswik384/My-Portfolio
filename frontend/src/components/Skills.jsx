import React from 'react';
import { Code2, Palette, Database, MessageSquare, FileText, Layers, Figma as FigmaIcon } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section-container skills-section-compact">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container-compact">
        {/* Frontend Skills */}
        <div className="skill-category-compact">
          <h3 className="skill-category-title-compact">Frontend</h3>
          <div className="skills-cloud-compact">
            <div className="skill-badge-with-icon" style={{ animationDelay: '0s' }}>
              <span className="skill-icon"><Code2 size={18} /></span>
              <span className="skill-name">HTML</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.1s' }}>
              <span className="skill-icon"><Palette size={18} /></span>
              <span className="skill-name">CSS</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.2s' }}>
              <span className="skill-icon"><Code2 size={18} /></span>
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.3s' }}>
              <span className="skill-icon"><Code2 size={18} /></span>
              <span className="skill-name">TypeScript</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.4s' }}>
              <span className="skill-icon"><Layers size={18} /></span>
              <span className="skill-name">React</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.5s' }}>
              <span className="skill-icon"><Layers size={18} /></span>
              <span className="skill-name">AngularJS</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.6s' }}>
              <span className="skill-icon"><Palette size={18} /></span>
              <span className="skill-name">Bootstrap</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.7s' }}>
              <span className="skill-icon"><Palette size={18} /></span>
              <span className="skill-name">Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Backend & Programming */}
        <div className="skill-category-compact">
          <h3 className="skill-category-title-compact">Backend & Programming</h3>
          <div className="skills-cloud-compact">
            <div className="skill-badge-with-icon" style={{ animationDelay: '0s' }}>
              <span className="skill-icon"><Code2 size={18} /></span>
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.1s' }}>
              <span className="skill-icon"><Layers size={18} /></span>
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.2s' }}>
              <span className="skill-icon"><Database size={18} /></span>
              <span className="skill-name">SQLite</span>
            </div>
          </div>
        </div>

        {/* UI/UX Tools */}
        <div className="skill-category-compact">
          <h3 className="skill-category-title-compact">UI/UX Tools</h3>
          <div className="skills-cloud-compact">
            <div className="skill-badge-with-icon" style={{ animationDelay: '0s' }}>
              <span className="skill-icon"><FigmaIcon size={18} /></span>
              <span className="skill-name">Figma</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-category-compact">
          <h3 className="skill-category-title-compact">Soft Skills</h3>
          <div className="skills-cloud-compact">
            <div className="skill-badge-with-icon" style={{ animationDelay: '0s' }}>
              <span className="skill-icon"><MessageSquare size={18} /></span>
              <span className="skill-name">Effective Communication</span>
            </div>
            <div className="skill-badge-with-icon" style={{ animationDelay: '0.1s' }}>
              <span className="skill-icon"><FileText size={18} /></span>
              <span className="skill-name">MS Office</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
