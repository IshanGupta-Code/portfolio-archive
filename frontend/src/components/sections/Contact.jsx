import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Send, MapPin, Phone, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/mock';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import './Contact.css';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (static for now)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#ea4335'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'IshanGupta-Code',
      href: personalInfo.github,
      color: '#333'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ishangupta6470',
      href: personalInfo.linkedin,
      color: '#0077b5'
    },
    {
      icon: ExternalLink,
      label: 'Linktree',
      value: 'ishan6470',
      href: personalInfo.linktree,
      color: '#39e09b'
    }
  ];

  return (
    <section id="contact" className={`contact-section theme-${currentTheme}`}>
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-subtitle">
            Open to opportunities, collaborations, and conversations about ML, Data, and Technology.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-header">
              <h3>Get in Touch</h3>
              <p>Feel free to reach out through any of these platforms. I typically respond within 24 hours.</p>
            </div>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="link-icon" style={{ '--icon-color': link.color }}>
                    <link.icon size={20} />
                  </div>
                  <div className="link-content">
                    <span className="link-label">{link.label}</span>
                    <span className="link-value">{link.value}</span>
                  </div>
                  <ExternalLink size={16} className="link-arrow" />
                </a>
              ))}
            </div>

            <div className="location-info">
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <CheckCircle size={48} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
