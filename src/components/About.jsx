import React from 'react';
import { motion } from 'framer-motion';
import headImg from '../assets/head.webp';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';

export default function About() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Avatar Sprite (Static — clean hairline border, no interactive shadow) */}
        <motion.div {...fadeUp(0.1, 16)} className="shrink-0 flex flex-col items-center gap-3">
          <div
            className="w-36 h-36 md:w-48 md:h-48 bg-(--bg-surface) border border-(--border-subtle) rounded-md flex items-center justify-center p-3"
          >
            <img
              src={headImg}
              alt="Partish avatar"
              className="w-full h-full object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-(--text-muted)">
            Partish · Developer
          </span>
        </motion.div>

        {/* Text column — open, quiet layout */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <SectionHeader label="about" title="Hey, I'm Partish." />

          <motion.p {...fadeUp(0.2, 16)} className="font-body text-base text-(--text-primary) body-measure">
            I&apos;m a developer who enjoys building focused tools, experimenting with computer vision, and crafting playful digital experiences inspired by pixel worlds.
          </motion.p>

          <motion.p {...fadeUp(0.25, 16)} className="font-body text-sm leading-relaxed text-(--text-secondary) body-measure">
            Most of my time goes into learning by building from the ground up — from a Science Fair prize-winning drowsiness detector in Python to orbital mission platforms and audio spatial canvases.
          </motion.p>

          {/* Currently Learning / Building line (derived strictly from existing text) */}
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
