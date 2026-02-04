import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        <div className="project-card glass-card">
          <div className="project-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwYXBwfGVufDB8fHx8MTc3MDE4NjMxNHww&ixlib=rb-4.1.0&q=85"
              alt="Food Munch Application"
              className="project-image"
            />
            <div className="project-overlay">
              <a href="#" className="project-link" aria-label="View live">
                <ExternalLink size={24} />
              </a>
              <a href="#" className="project-link" aria-label="View code">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="project-content">
            <h3 className="project-title">Food Munch Application</h3>
            <p className="project-description">
              Responsive restaurant web app with menu categorization, modals, navigation, and payment sections. Built with performance optimization and clean code principles.
            </p>
            
            <div className="project-tech">
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="project-card glass-card">
          <div className="project-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzAxODYzMDZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Baghara Khana"
              className="project-image"
            />
            <div className="project-overlay">
              <a href="#" className="project-link" aria-label="View live">
                <ExternalLink size={24} />
              </a>
              <a href="#" className="project-link" aria-label="View code">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="project-content">
            <h3 className="project-title">Baghara Khana</h3>
            <p className="project-description">
              Modern React + Vite restaurant website with reusable UI components, menu categorization, Swiggy & Zomato integration, and optimized performance.
            </p>
            
            <div className="project-tech">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
