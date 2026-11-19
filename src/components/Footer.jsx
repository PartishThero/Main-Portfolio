import React from 'react';
import { contactInfo } from '../constants/portfolioData';

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[0.7rem] uppercase"
      style={{
        padding: '1.5rem clamp(1.25rem, 14vw, 14vw)',
        borderTop: '1.5px solid var(--tint-border)',
        color: 'var(--muted)',
        letterSpacing: '0.12em',
      }}
    >
      <span className="text-center sm:text-left">© 2026 Partish · All Rights Reserved</span>
      <div className="flex gap-6">
        {contactInfo.socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}