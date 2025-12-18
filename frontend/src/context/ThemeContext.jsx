import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  day: {
    name: 'day',
    icon: '☀️',
    label: 'Day',
    colors: {
      '--bg-primary': '#fafafa',
      '--bg-secondary': '#ffffff',
      '--bg-tertiary': '#f4f4f5',
      '--text-primary': '#18181b',
      '--text-secondary': '#3f3f46',
      '--text-muted': '#71717a',
      '--accent-primary': '#2563eb',
      '--accent-secondary': '#3b82f6',
      '--accent-glow': 'rgba(37, 99, 235, 0.15)',
      '--border-color': '#e4e4e7',
      '--card-bg': '#ffffff',
      '--card-border': '#e4e4e7',
      '--shadow-color': 'rgba(0, 0, 0, 0.08)',
      '--gradient-start': '#f8fafc',
      '--gradient-end': '#e0e7ff',
      '--nav-bg': 'rgba(255, 255, 255, 0.85)',
      '--code-bg': '#f4f4f5'
    }
  },
  night: {
    name: 'night',
    icon: '🌙',
    label: 'Night',
    colors: {
      '--bg-primary': '#0a0a0b',
      '--bg-secondary': '#131316',
      '--bg-tertiary': '#1c1c21',
      '--text-primary': '#fafafa',
      '--text-secondary': '#d4d4d8',
      '--text-muted': '#a1a1aa',
      '--accent-primary': '#60a5fa',
      '--accent-secondary': '#93c5fd',
      '--accent-glow': 'rgba(96, 165, 250, 0.2)',
      '--border-color': '#27272a',
      '--card-bg': '#18181b',
      '--card-border': '#27272a',
      '--shadow-color': 'rgba(0, 0, 0, 0.4)',
      '--gradient-start': '#0a0a0b',
      '--gradient-end': '#1e1b4b',
      '--nav-bg': 'rgba(10, 10, 11, 0.9)',
      '--code-bg': '#1c1c21'
    }
  },
  cyber: {
    name: 'cyber',
    icon: '⚡',
    label: 'Cyber',
    colors: {
      '--bg-primary': '#050508',
      '--bg-secondary': '#0a0a0f',
      '--bg-tertiary': '#0f0f18',
      '--text-primary': '#f0f0f0',
      '--text-secondary': '#c0c0c5',
      '--text-muted': '#808090',
      '--accent-primary': '#00ff88',
      '--accent-secondary': '#ff0080',
      '--accent-glow': 'rgba(0, 255, 136, 0.3)',
      '--border-color': '#1a1a2e',
      '--card-bg': '#0a0a12',
      '--card-border': '#00ff8833',
      '--shadow-color': 'rgba(0, 255, 136, 0.1)',
      '--gradient-start': '#050508',
      '--gradient-end': '#0a0f1a',
      '--nav-bg': 'rgba(5, 5, 8, 0.95)',
      '--code-bg': '#0a0a12',
      '--neon-pink': '#ff0080',
      '--neon-green': '#00ff88',
      '--neon-cyan': '#00f5ff',
      '--neon-purple': '#bf00ff'
    }
  }
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('day');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[currentTheme];
    
    Object.entries(theme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const cycleTheme = () => {
    const themeOrder = ['day', 'night', 'cyber'];
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setCurrentTheme(themeOrder[nextIndex]);
  };

  const setTheme = (theme) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, cycleTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
