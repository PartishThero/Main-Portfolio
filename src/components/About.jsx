import React from 'react';
import { motion } from 'framer-motion';
import headImg from '../assets/head.webp';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { pageConfig } from '../constants/portfolioData';

export default function About() {
  return (
    <div className="section-shell">
      <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Avatar Sprite — Proper crisp pixel portrait scaled up */}
        <motion.div {...fadeUp(0.1, 16)} className="shrink-0 flex flex-col items-center gap-3">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-(--bg-surface) border border-(--border-subtle) rounded-md flex items-center justify-center p-4 shadow-[3px_3px_0px_var(--border-subtle)]"
          >
            <img
              src={headImg}
              alt="Partish avatar"
              className="w-full h-full object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-(--text-muted)">
            Partish · Developer
          </span>
        </motion.div>

        {/* Text column */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          {/* Section Header with Mascot Companion Greeting */}
          <SectionHeader
            label="about me"
            title="Hey, I'm Partish."
            mascotIcon={pageConfig.about.icon}
            speechBubble={pageConfig.about.message}
          />

          {/* Restored Original Voice */}
          <motion.p {...fadeUp(0.2, 16)} className="font-body text-base text-(--text-primary) body-measure leading-relaxed">
            I&apos;m a beginner programmer who enjoys building small projects and experimenting with new ideas. Right now I&apos;m learning Python and web development while exploring areas like artificial intelligence and game development.
          </motion.p>

          <motion.p {...fadeUp(0.25, 16)} className="font-body text-sm leading-relaxed text-(--text-secondary) body-measure">
            I enjoy creating things that are both functional and fun to use — from simple tools to playful interfaces inspired by pixel games. Most of my time goes into learning by building, experimenting with projects, and improving with every iteration.
          </motion.p>

          {/* Currently Learning / Building line */}
          <motion.div
            {...fadeUp(0.3, 16)}
            className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 font-mono text-xs text-(--text-secondary)"
          >
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[0.7rem] bg-(--bg-surface-raised) border border-(--border-subtle) text-(--accent-amber) uppercase tracking-wider w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-(--accent-amber)" />
              Currently
            </span>
            <span>Learning Python &amp; web systems · exploring AI, vision &amp; game mechanics</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
