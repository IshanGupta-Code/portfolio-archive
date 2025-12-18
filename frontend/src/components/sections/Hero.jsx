import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/mock';
import { Button } from '../ui/button';
import './Hero.css';

const Hero = () => {
  const { currentTheme } = useTheme();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current && currentTheme === 'cyber') {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        heroRef.current.style.setProperty('--mouse-x', `${x}%`);
        heroRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentTheme]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`hero theme-${currentTheme}`} ref={heroRef}>
      <div className="hero-bg-effects">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        {currentTheme === 'cyber' && (
          <>
            <div className="cyber-scanline" />
            <div className="cyber-glow" />
          </>
        )}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-title">
          <span className="title-greeting">Hello, I'm</span>
          <span className="title-name">{personalInfo.name}</span>
        </h1>

        <p className="hero-role">{personalInfo.title}</p>
        
        <p className="hero-tagline">{personalInfo.tagline}</p>

        <div className="hero-cta">
          <Button
            size="lg"
            className="cta-primary"
            onClick={() => scrollToSection('#projects')}
          >
            View Projects
            <ArrowRight size={18} />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="cta-secondary"
            asChild
          >
            <a href={personalInfo.resumeUrl} download>
              <Download size={18} />
              Download Resume
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="cta-secondary"
            onClick={() => scrollToSection('#contact')}
          >
            <Mail size={20} />
            Contact
          </Button>
        </div>

        <div className="hero-social">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={personalInfo.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Linktree"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
