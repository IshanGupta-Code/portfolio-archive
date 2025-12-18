import React from 'react';
import { ExternalLink, Award, Database, BarChart3, Table, Sheet, BrainCircuit } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { certificationsData } from '../../data/mock';
import './Certifications.css';

const iconMap = {
  database: Database,
  barChart: BarChart3,
  table: Table,
  sheet: Sheet,
  analytics: BarChart3,
  brain: BrainCircuit
};

const Certifications = () => {
  const { currentTheme } = useTheme();

  return (
    <section id="certifications" className={`certifications-section theme-${currentTheme}`}>
      <div className="certifications-container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials & achievements</h2>
          <p className="section-subtitle">
            Professional certifications validating expertise in data analytics, databases, and business intelligence.
          </p>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="cert-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="cert-icon">
                  <IconComponent size={24} />
                </div>

                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-org">{cert.organization}</p>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        <span>View Credential</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="cert-badge">
                  <Award size={16} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="cert-stats">
          <div className="stat-item">
            <span className="stat-number">{certificationsData.length}</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Organizations</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">2024-25</span>
            <span className="stat-label">Recent</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
