import React from 'react';
import { Code2, Palette, Database, MessageSquare, FileText, Layers, Figma as FigmaIcon } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <Code2 size={18} /> },
        { name: 'CSS', icon: <Palette size={18} /> },
        { name: 'JavaScript', icon: <Code2 size={18} /> },
        { name: 'TypeScript', icon: <Code2 size={18} /> },
        { name: 'React', icon: <Layers size={18} /> },
        { name: 'AngularJS', icon: <Layers size={18} /> },
        { name: 'Bootstrap', icon: <Palette size={18} /> },
        { name: 'Tailwind CSS', icon: <Palette size={18} /> }
      ]
    },
    {
      title: 'Backend & Programming',
      skills: [
        { name: 'Python', icon: <Code2 size={18} /> },
        { name: 'Node.js', icon: <Layers size={18} /> },
        { name: 'SQLite', icon: <Database size={18} /> }
      ]
    },
    {
      title: 'UI/UX Tools',
      skills: [
        { name: 'Figma', icon: <FigmaIcon size={18} /> }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Effective Communication', icon: <MessageSquare size={18} /> },
        { name: 'MS Office', icon: <FileText size={18} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container skills-section-compact">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container-compact">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-compact">
            <h3 className="skill-category-title-compact">{category.title}</h3>
            <div className="skills-cloud-compact">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-badge-with-icon"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
