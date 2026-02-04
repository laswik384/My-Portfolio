import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
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