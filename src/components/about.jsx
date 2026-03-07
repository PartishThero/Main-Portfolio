import React from 'react';
import { motion } from 'framer-motion';
import headImg from '../assets/head.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function About() {
  return (
    <div
      className="min-h-screen bg-(--bg-primary) text-(--text-primary) flex flex-col"
    >
      {/* PAGE CONTENT — vertically and horizontally centered, navbar-aware */}
      <div className="flex-1 flex items-center justify-center px-24 pt-28 pb-16">

        <div className="flex items-center gap-20 w-full max-w-5xl">

          {/* ── LEFT: Avatar ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="shrink-0 flex flex-col items-center gap-3"
          >
            <div
              className="w-52 h-52 bg-(--bg-surface) border-2 border-(--accent-main) flex items-center justify-center p-4"
              style={{ boxShadow: '6px 6px 0px var(--bg-surface), 6px 6px 0px 2px var(--accent-main)' }}
            >
              <img
                src={headImg}
                alt="Partish"
                className="w-100 h-100 object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-(--text-secondary)">
              Partish · Full-Stack Dev
            </p>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <div className="flex flex-col gap-6 flex-1">

            <motion.p {...fadeUp(0)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-(--accent-secondary)"
            >
              / about me
            </motion.p>

            <motion.h2
              {...fadeUp(0.15)}
              className="text-[3.75rem] leading-none"
              style={{ fontFamily: '"Boldonse", system-ui' }}
            >
              Hey, I'm{' '}
              <span
                className="text-(--accent-main)"
                style={{ textShadow: 'var(--accent-glow)' }}
              >
                Partish.
              </span>
            </motion.h2>

            <motion.div {...fadeUp(0.2)} className="w-12 h-0.5 bg-(--accent-main)" />

            <motion.p
              {...fadeUp(0.25)}
              className="font-mono text-sm leading-[1.9] text-(--text-secondary) max-w-125"
            >
              I'm a full-stack developer who cares about building things that feel
              great to use. I like clean code, thoughtful design, and projects that
              solve real problems.
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="font-mono text-sm leading-[1.9] text-(--text-secondary) max-w-125"
            >
              Outside of work I spend time on pixel art, tinkering with side
              projects, and drinking an irresponsible amount of coffee.
            </motion.p>

            {/* Stats */}
            <motion.div {...fadeUp(0.4)} className="flex gap-10 pt-2">
              {[
                { value: '2+',  label: 'Years exp.' },
                { value: '10+', label: 'Projects'   },
                { value: '∞',   label: 'Coffee cups' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="text-[2rem] leading-none text-(--accent-main)"
                    style={{ fontFamily: '"Boldonse", system-ui', textShadow: 'var(--accent-glow)' }}
                  >
                    {value}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-(--text-secondary)">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}