/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants/animations';

/**
 * Shared section header with a label line, large title, and an accent underline.
 * @param {string} label - Small uppercase eyebrow text (e.g. "about me")
 * @param {string} title - Main heading prefix (e.g. "Hey, I'm")
 * @param {string} [highlightWord] - Accent-coloured word appended to the title
 */
export default function SectionHeader({ label, title, highlightWord }) {
  return (
    <div className="flex flex-col gap-3" style={{ marginBottom: '3rem' }}>
      <motion.p
        {...fadeUp(0)}
        className="font-mono text-xs uppercase"
        style={{ letterSpacing: '0.2em', color: 'var(--accent-secondary)' }}
      >
        / {label}
      </motion.p>
      <motion.h2
        {...fadeUp(0.1)}
        className="leading-none"
        style={{ fontFamily: '"Boldonse", system-ui', fontSize: 'clamp(2.25rem, 6vw, 4rem)' }}
      >
        {title}{' '}
        {highlightWord && (
          <span style={{ color: 'var(--accent-main)' }}>{highlightWord}</span>
        )}
      </motion.h2>
      <motion.div
        {...fadeUp(0.15)}
        style={{ width: '3rem', height: '2px', backgroundColor: 'var(--accent-main)' }}
      />
    </div>
  );
}
