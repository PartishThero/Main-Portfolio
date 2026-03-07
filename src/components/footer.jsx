import React from 'react';

const socials = [
  { label: 'GitHub',   href: 'https://github.com/yourhandle' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
];

export default function Footer() {
  return (
    <footer
      className="w-full flex items-center justify-between font-mono text-[0.7rem] uppercase"
      style={{
        padding: '1.5rem 14vw',
        borderTop: '1px solid var(--bg-surface)',
        color: 'var(--text-secondary)',
        letterSpacing: '0.12em',
      }}
    >
      <span>© 2026 Partish · All Rights Reserved</span>

      <div className="flex gap-6">
        {socials.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
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