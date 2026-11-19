/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <header className={`flex flex-col gap-2 mb-8 md:mb-12 ${className}`}>
      {label && (
        <span className="font-mono text-[0.7rem] uppercase tracking-widest text-(--text-muted)">
          {label}
        </span>
      )}
      <h2
        className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary)"
        style={{ fontFamily: 'var(--font-display)', lineHeight: 1.2 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm text-(--text-secondary) max-w-xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}
