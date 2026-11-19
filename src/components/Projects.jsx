import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emptyImg from '../assets/surprised-pixel.webp';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { projects, filters, pageConfig, emptyProjectState } from '../constants/portfolioData';

const DEFAULT_FILTER = 'All';

// Pixel quest icons for each project
const projectQuestIcons = {
  1: {
    glyph: '👁️',
    label: 'VISION',
    bg: 'bg-amber-950/30',
    border: 'border-amber-700/60',
    tag: 'QUEST CLEARED · 1ST PRIZE',
    tagColor: 'text-(--accent-amber)',
  },
  2: {
    glyph: '🚀',
    label: 'NASA',
    bg: 'bg-emerald-950/30',
    border: 'border-emerald-700/60',
    tag: 'MISSION · NASA SPACE APPS 2026',
    tagColor: 'text-(--accent-sage)',
  },
  3: {
    glyph: '📜',
    label: 'STUDY',
    bg: 'bg-stone-900/50',
    border: 'border-(--border-strong)',
    tag: 'PERSONAL ARCHIVE',
    tagColor: 'text-(--text-muted)',
  },
  4: {
    glyph: '💿',
    label: 'AUDIO',
    bg: 'bg-stone-900/50',
    border: 'border-(--border-strong)',
    tag: 'SPATIAL CANVAS',
    tagColor: 'text-(--text-muted)',
  },
  5: {
    glyph: '🎙️',
    label: 'STAGE',
    bg: 'bg-stone-900/50',
    border: 'border-(--border-strong)',
    tag: 'WEB EXPERIENCE',
    tagColor: 'text-(--text-muted)',
  },
};

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
          label="quest log"
          title="Selected works."
          subtitle="Real projects built for science fairs, hackathons, and personal tools."
          mascotIcon={pageConfig.projects.icon}
          speechBubble={pageConfig.projects.message}
        />

        {/* Filter Chips with hard pixel-offset elevation */}
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

        {/* Numbered Editorial Quest Log */}
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
                {filtered.map((p, idx) => {
                  const questMeta = projectQuestIcons[p.id] || projectQuestIcons[3];
                  const isKeyQuest = p.featured;

                  return (
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
                      className={`group py-7 sm:py-8 border-b border-(--border-subtle) flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all hover:bg-(--bg-surface)/40 px-3 sm:px-5 rounded-md ${
                        isKeyQuest
                          ? 'border-l-4 border-l-(--accent-amber) bg-(--bg-surface)/35 shadow-[2px_2px_0px_var(--border-subtle)]'
                          : 'border-l-2 border-l-transparent'
                      }`}
                    >
                      {/* Left: Quest Frame + Meta + Content */}
                      <div className="flex items-start gap-4 sm:gap-6 flex-1">
                        {/* Visual Quest Placeholder Frame */}
                        <div
                          className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded border-2 ${questMeta.border} ${questMeta.bg} flex flex-col items-center justify-center gap-0.5 shadow-[2px_2px_0px_var(--border-strong)] group-hover:shadow-[3px_3px_0px_var(--accent-sage)] transition-all`}
                        >
                          <span className="text-xl sm:text-2xl select-none" role="img" aria-label={questMeta.label}>
                            {questMeta.glyph}
                          </span>
                          <span className="font-pixel text-[9px] uppercase tracking-wider text-(--text-muted)">
                            {questMeta.label}
                          </span>
                        </div>

                        {/* Content column */}
                        <div className="flex flex-col gap-2.5 flex-1">
                          {/* Quest Level & Meta */}
                          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider">
                            <span className="font-pixel text-xs text-(--text-muted)">
                              LEVEL 0{idx + 1}
                            </span>
                            <span className="text-(--border-strong)">·</span>
                            <span className={`font-semibold ${questMeta.tagColor}`}>
                              {questMeta.tag}
                            </span>
                            <span className="text-(--border-strong)">·</span>
                            <span className="text-(--text-muted)">
                              {p.category}
                            </span>
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
                          <div className="flex flex-wrap gap-2 pt-1.5">
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
                      <div className="md:pt-1 md:self-start shrink-0 flex items-center gap-1.5 pl-18 md:pl-0">
                        <span className="font-pixel text-xs text-(--text-muted) group-hover:text-(--text-primary) transition-colors border border-(--border-strong) px-3 py-1.5 rounded bg-(--bg-surface) shadow-[2px_2px_0px_var(--border-strong)] group-hover:shadow-[3px_3px_0px_var(--accent-sage)] group-hover:border-(--accent-sage) inline-flex items-center gap-1.5">
                          <span>VIEW CODE</span>
                          <span className="text-(--accent-sage)" aria-hidden="true">▸</span>
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
