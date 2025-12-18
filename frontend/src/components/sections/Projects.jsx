import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Code2, Layers } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { projectsData } from '../../data/mock';
import { Button } from '../ui/button';
import './Projects.css';

const Projects = () => {
  const { currentTheme } = useTheme();
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className={`projects-section theme-${currentTheme}`}>
      <div className="projects-container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured work</h2>
          <p className="section-subtitle">
            Real-world projects showcasing Machine Learning, Data Analysis, and Web Development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-language">
                  <Code2 size={14} />
                  <span>{project.language}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-problem">{project.problem}</p>

                <div className={`project-details ${expandedProject === project.id ? 'show' : ''}`}>
                  <div className="detail-section">
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <ChevronRight size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Outcome</h4>
                    <p className="outcome">{project.outcome}</p>
                  </div>
                </div>

                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <Button
                  variant="ghost"
                  size="sm"
                  className="expand-btn"
                  onClick={() => toggleProject(project.id)}
                >
                  {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                  <Layers size={16} />
                </Button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <Github size={18} />
                  <span>View Code</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more?</p>
          <a
            href="https://github.com/IshanGupta-Code?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            <Github size={18} />
            <span>View All Repositories</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
