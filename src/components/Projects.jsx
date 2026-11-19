import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emptyImg from '../assets/surprised-pixel.webp';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { projects, filters, pageConfig, emptyProjectState } from '../constants/portfolioData';

const DEFAULT_FILTER = 'All';

export default function Projects() {
  const [active, setActive] = useState(DEFAULT_FILTER);
  const filtered = projects.filter(
    (p) => active === DEFAULT_FILTER || p.category === active.toLowerCase()
  );

  return (
    <div className="section-shell">
      <div className="section-container flex flex-col">
        {/* Header with Mascot Companion */}
        <SectionHeader
          label="projects"
          title="Selected works."
          mascotIcon={pageConfig.projects.icon}
          speechBubble={pageConfig.projects.message}
        />

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`btn-interactive cursor-pointer ${isActive ? 'btn-interactive-active' : ''}`}
              >
                {f}
              </button>
            );
          })}
        </motion.div>

        {/* Numbered Editorial List */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              {...fadeUp()}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
              <img
                src={emptyImg}
                alt="Empty state mascot"
                className="w-24 h-24"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex flex-col items-center gap-1.5">
                <p className="font-pixel text-sm uppercase tracking-wider text-(--accent-amber)">
                  {emptyProjectState.title}
                </p>
                <p className="font-mono text-xs text-(--text-secondary)">
                  {emptyProjectState.message}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col border-t border-(--border-subtle)"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, idx) => (
                  <motion.a
                    key={p.id}
                    layout="position"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      layout: { duration: 0.25, ease: 'easeOut' },
                      opacity: { duration: 0.2 },
                    }}
                    className={`group py-7 sm:py-8 border-b border-(--border-subtle) flex flex-col md:flex-row md:items-start justify-between gap-6 transition-colors hover:bg-(--bg-surface)/40 px-2 sm:px-4 rounded-md ${
                      p.featured ? 'bg-(--bg-surface)/30' : ''
                    }`}
                  >
                    {/* Left: Number + Content */}
                    <div className="flex items-start gap-4 sm:gap-6 flex-1">
                      <span className="font-pixel text-xs text-(--text-muted) pt-1 shrink-0">
                        0{idx + 1}
                      </span>

                      <div className="flex flex-col gap-2.5 flex-1">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider">
                          <span className="text-(--accent-amber) font-semibold">
                            {p.year}
                          </span>
                          <span className="text-(--border-strong)">·</span>
                          <span className="text-(--text-muted)">
                            {p.category}
                          </span>
                          {p.featured && (
                            <span className="ml-1 px-1.5 py-0.5 rounded text-[0.65rem] bg-(--bg-surface-raised) text-(--accent-sage) border border-(--border-subtle)">
                              Key Quest
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-(--text-primary) group-hover:text-(--accent-sage) transition-colors">
                          {p.title}
                        </h3>

                        {/* Outcome Lead */}
                        {p.highlight && (
                          <p className="font-body text-sm font-medium text-(--text-primary)">
                            {p.highlight}
                          </p>
                        )}

                        {/* Description */}
                        <p className="font-body text-sm leading-relaxed text-(--text-secondary) body-measure">
                          {p.desc}
                        </p>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[0.7rem] px-2.5 py-0.5 rounded bg-(--bg-surface) border border-(--border-subtle) text-(--text-secondary)"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Aligned Link Affordance */}
                    <div className="md:pt-1 md:self-start shrink-0 flex items-center gap-1.5 font-mono text-xs text-(--text-muted) group-hover:text-(--accent-sage) transition-colors pl-8 md:pl-0">
                      <span>View Code</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
