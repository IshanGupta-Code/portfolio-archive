import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { skillsData } from '../../data/mock';
import { Code, Database, Globe, Wrench, Brain } from 'lucide-react';
import './Skills.css';

const categoryIcons = {
  'Programming Languages': Code,
  'Data & ML': Database,
  'Web & Backend': Globe,
  'Tools': Wrench,
  'Core Concepts': Brain
};

const Skills = () => {
  const { currentTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsData)[0]);

  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className={`skills-section theme-${currentTheme}`}>
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies & expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit built through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="skills-layout">
          <div className="category-tabs">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category] || Code;
              return (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <IconComponent size={18} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          <div className="skills-grid">
            {skillsData[activeCategory].map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ '--progress': `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category] || Code;
            return (
              <div key={category} className="summary-item">
                <IconComponent size={20} />
                <span className="summary-count">{skillsData[category].length}</span>
                <span className="summary-label">{category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
