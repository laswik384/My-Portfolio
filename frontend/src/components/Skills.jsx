import React from 'react';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'AngularJS', 'Bootstrap', 'Tailwind CSS']
  },
  {
    category: 'Backend & Programming',
    skills: ['Python', 'Node.js', 'SQLite']
  },
  {
    category: 'UI/UX Tools',
    skills: ['Figma']
  },
  {
    category: 'Soft Skills',
    skills: ['Effective Communication', 'MS Office']
  }
];

const Skills = () => {

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
            <div className="skills-cloud">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="skill-badge"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {skill}
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