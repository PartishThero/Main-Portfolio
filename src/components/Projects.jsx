import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emptyImg from '../assets/surprised-pixel.webp';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { projects, filters } from '../constants/portfolioData';

/** The default "show all" filter value */
const DEFAULT_FILTER = 'All';

const layoutStyle = {
  backgroundColor: 'rgba(20, 28, 24, 0.94)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1.5px solid var(--accent-main)',
  padding: 'clamp(1.5rem,4vw,2.5rem)',
  borderRadius: '0.5rem',
  boxShadow: '4px 4px 0px var(--accent-main)',
  transition: 'box-shadow 0.15s ease',
  minHeight: '220px',
};
const filterButtonStyle = (isActive) => ({
  letterSpacing: '0.12em',
  padding: '0.5rem 1.25rem',
  borderRadius: '0.375rem',
  transition: 'all 0.15s ease',
  border: '1.5px solid var(--accent-main)',
  backgroundColor: isActive ? 'var(--accent-main)' : 'var(--bg-surface)',
  color: isActive ? 'var(--bg-primary)' : 'var(--accent-main)',
  boxShadow: isActive ? '2px 2px 0px var(--bg-primary), 2px 2px 0px 2px var(--accent-main)' : '3px 3px 0px var(--accent-main)',
  transform: isActive ? 'translate(2px, 2px)' : 'translate(0, 0)',
});

const filterEnter = (e, isActive) => { if (!isActive) { e.currentTarget.style.transform = 'translate(0,-2px)'; e.currentTarget.style.boxShadow = '3px 5px 0px var(--accent-main)'; } };
const filterLeave = (e, isActive) => { if (!isActive) { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = '3px 3px 0px var(--accent-main)'; } };

export default function Projects() {
  const [active, setActive] = useState(DEFAULT_FILTER);
  const filtered = projects.filter(p => active === DEFAULT_FILTER || p.category === active.toLowerCase());

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="section-container flex flex-col">

      {/* Header */}
      <SectionHeader label="projects" title="Selected" highlightWord="works." />

      {/* Filter Buttons */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 sm:gap-5" style={{ marginBottom: '3rem' }}>
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="font-mono text-xs uppercase"
              style={filterButtonStyle(isActive)}
              onMouseEnter={(e) => filterEnter(e, isActive)}
              onMouseLeave={(e) => filterLeave(e, isActive)}
            >
              {f}
            </button>
          );
        })}
      </motion.div>

      {/* Grid or Empty State */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div key="empty" {...fadeUp()} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.3 }} className="flex flex-col items-center justify-center gap-6" style={{ paddingTop: '4rem' }}>
            <img src={emptyImg} alt="Nothing here" style={{ width: '120px', height: '120px', imageRendering: 'pixelated' }} />
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-sm uppercase" style={{ letterSpacing: '0.15em', color: 'var(--accent-main)' }}>Caught me :3</p>
              <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Come back soon - Nothing here. YET.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full grid relative"
            style={{
              position: 'relative',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '2rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.a
                  key={p.id}
                  layout="position"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    layout: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  whileHover={{ x: 2, y: 2, boxShadow: '2px 2px 0px var(--accent-main)' }}
                  className="flex flex-col justify-between"
                  style={layoutStyle}
                >
                  <div className="flex flex-col" style={{ gap: '0.8rem', marginBottom: '2rem' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.6rem] uppercase" style={{ letterSpacing: '0.15em', color: 'var(--accent-secondary)' }}>{p.category}</span>
                      <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>0{p.id}</span>
                    </div>
                    <h3 style={{ color: 'var(--text-primary)', fontFamily: '"Boldonse", system-ui', fontSize: '1.2rem', lineHeight: 1.2 }}>{p.title}</h3>
                    <p className="font-mono leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.7' }}>{p.desc}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap" style={{ gap: '0.5rem' }}>
                      {p.tech.map(t => (
                        <span key={t} className="font-mono uppercase" style={{ fontSize: '0.6rem', padding: '0.25rem 0.6rem', border: '1px solid var(--accent-main)', color: 'var(--accent-main)', letterSpacing: '0.08em', borderRadius: '0.25rem' }}>{t}</span>
                      ))}
                    </div>
                    <span className="font-mono" style={{ color: 'var(--accent-main)', fontSize: '1rem', marginLeft: '1rem' }}>
                      <i className="fa-solid fa-arrow-right-from-bracket text-xs"></i>
                    </span>
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