import React from 'react';
import { contactInfo } from '../constants/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full border-t border-(--bg-surface) py-6">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[0.75rem] uppercase tracking-wider text-(--text-secondary)">
        <span className="text-center sm:text-left">© 2026 Partish · All Rights Reserved</span>
        <div className="flex gap-6">
          {contactInfo.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--text-secondary) hover:text-(--accent-main) transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}