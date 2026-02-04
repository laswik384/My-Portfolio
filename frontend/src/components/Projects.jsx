import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Food Munch Application',
      description: 'Responsive restaurant web app with menu categorization, modals, navigation, and payment sections. Built with performance optimization and clean code principles.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwYXBwfGVufDB8fHx8MTc3MDE4NjMxNHww&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Baghara Khana',
      description: 'Modern React + Vite restaurant website with reusable UI components, menu categorization, Swiggy & Zomato integration, and optimized performance.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzAxODYzMDZ8MA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <a href={project.liveLink} className="project-link" aria-label="View live">
                  <ExternalLink size={24} />
                </a>
                <a href={project.codeLink} className="project-link" aria-label="View code">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;