import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/mock';
import './Footer.css';

const Footer = () => {
  const { currentTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`footer theme-${currentTheme}`}>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <button className="footer-logo" onClick={scrollToTop}>
              <span className="logo-text">IG</span>
              <span className="logo-name">Ishan Gupta</span>
            </button>
            <p className="footer-tagline">
              Building the future with code, data, and machine learning.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
