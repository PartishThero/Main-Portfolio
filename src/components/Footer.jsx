import React from 'react';
import { contactInfo } from '../constants/portfolioData';

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[0.7rem] uppercase"
      style={{
        padding: '1.5rem clamp(1.25rem, 14vw, 14vw)',
        borderTop: '1px solid var(--bg-surface)',
        color: 'var(--text-secondary)',
        letterSpacing: '0.12em',
      }}
    >
      <span className="text-center sm:text-left">© 2026 Partish · All Rights Reserved</span>
      <div className="flex gap-6">
        {contactInfo.socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-main)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}