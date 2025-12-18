import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { aboutData, educationData, personalInfo } from '../../data/mock';
import './About.css';

const About = () => {
  const { currentTheme } = useTheme();

  return (
    <section id="about" className={`about-section theme-${currentTheme}`}>
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building the future of AI with code & data</h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-intro">
              <div className="about-avatar">
                <div className="avatar-placeholder">
                  <span className="avatar-initials">IG</span>
                </div>
                <div className="avatar-ring" />
              </div>
              
              <div className="about-text">
                <p className="about-summary">{aboutData.summary}</p>
                
                <div className="about-location">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="about-highlights">
              <h3 className="highlights-title">Quick Facts</h3>
              <ul className="highlights-list">
                {aboutData.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <CheckCircle size={18} className="highlight-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>
            
            <div className="education-content">
              <h3 className="education-title">Education</h3>
              
              <div className="education-item main-education">
                <h4 className="degree-name">{educationData.degree}</h4>
                <p className="institution-name">{educationData.institution}</p>
                <p className="affiliation">{educationData.affiliation}</p>
                <div className="education-meta">
                  <Calendar size={14} />
                  <span>{educationData.duration}</span>
                </div>
              </div>

              <div className="education-divider" />

              <div className="education-item previous-education">
                <h4 className="degree-name">{educationData.previousEducation.degree}</h4>
                <p className="institution-name">{educationData.previousEducation.institution}</p>
                <div className="education-details">
                  <span className="board">{educationData.previousEducation.board}</span>
                  <span className="cgpa">CGPA: {educationData.previousEducation.cgpa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
