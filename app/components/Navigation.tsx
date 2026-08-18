'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getThemeIcon = () => {
    if (!isClient || !mounted) return '○';
    
    if (theme === 'light') {
      return '☀️';
    } else if (theme === 'dark') {
      return '🌙';
    } else {
      return '◐';
    }
  };

  const getThemeLabel = () => {
    if (!isClient || !mounted) return 'Theme';
    
    if (theme === 'light') {
      return 'Light';
    } else if (theme === 'dark') {
      return 'Dark';
    } else {
      return 'System';
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{
      backgroundColor: 'var(--bg-primary)',
      borderColor: 'var(--border-color)'
    }}>
      <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="font-bold text-lg transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          Xia Zhang
        </Link>
        
        <div className="flex gap-8 items-center">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            Work
          </Link>
          <a 
            href="#about" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            About
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            Contact
          </a>
          
          {/* Theme Toggle */}
          {isClient && mounted && (
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1.5 rounded text-sm font-medium transition-colors flex items-center gap-1.5"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: `1px solid var(--border-color)`
              }}
              title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
              aria-label="Toggle theme"
            >
              <span>{getThemeIcon()}</span>
              <span className="hidden sm:inline">{getThemeLabel()}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
