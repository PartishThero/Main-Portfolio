import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Portfolio Site',
    desc: 'This very site — pixel art character, typewriter intro, custom cursor.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    category: 'personal',
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    desc: 'Full-stack shop with auth, cart, payments and admin dashboard.',
    tech: ['Node.js', 'PostgreSQL', 'React'],
    category: 'professional',
    link: '#',
  },
  {
    id: 3,
    title: 'Pixel Art Editor',
    desc: 'Browser-based pixel art tool with layers, export, and palette management.',
    tech: ['Canvas API', 'TypeScript'],
    category: 'personal',
    link: '#',
  },
  {
    id: 4,
    title: 'CRM Dashboard',
    desc: 'Internal CRM with analytics, pipeline tracking and team management.',
    tech: ['React', 'Express', 'MongoDB'],
    category: 'professional',
    link: '#',
  },
  {
    id: 5,
    title: 'CLI Task Manager',
    desc: 'Terminal-based productivity tool with tagging and priority queues.',
    tech: ['Python', 'SQLite'],
    category: 'personal',
    link: '#',
  },
  {
    id: 6,
    title: 'SaaS Onboarding Flow',
    desc: 'Multi-step onboarding UI with animations and progress persistence.',
    tech: ['React', 'Tailwind', 'Zustand'],
    category: 'professional',
    link: '#',
  },
];

const filters = ['All', 'Professional', 'Personal'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = projects.filter(p =>
    active === 'All' ? true : p.category === active.toLowerCase()
  );

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: '10rem',
        paddingBottom: '8rem',
        paddingLeft: '14vw',
        paddingRight: '14vw',
      }}
    >
      {/* ── Header ── */}
      <div className="flex flex-col gap-5 w-full" style={{ marginBottom: '4rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase"
          style={{ letterSpacing: '0.2em', color: 'var(--accent-secondary)' }}
        >
          / projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="leading-none"
          style={{ fontFamily: '"Boldonse", system-ui', fontSize: '4rem' }}
        >
          Selected{' '}
          <span style={{ color: 'var(--accent-main)' }}>works.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          style={{ width: '3rem', height: '2px', backgroundColor: 'var(--accent-main)' }}
        />
      </div>

      {/* ── 3D Filter Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="flex gap-5"
        style={{ marginBottom: '4rem' }}
      >
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="font-mono text-xs uppercase"
              style={{
                letterSpacing: '0.12em',
                padding: '0.7rem 2rem',
                borderRadius: '0.5rem',
                backgroundColor: isActive ? 'var(--accent-main)' : 'var(--bg-surface)',
                color: isActive ? 'var(--bg-primary)' : 'var(--accent-main)',
                border: '1.5px solid var(--accent-main)',
                boxShadow: isActive
                  ? '2px 2px 0px var(--bg-primary), 2px 2px 0px 2px var(--accent-main)'
                  : '4px 4px 0px var(--accent-main)',
                transform: isActive ? 'translate(2px, 2px)' : 'translate(0, 0)',
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.transform = 'translate(0, -3px)';
                  e.currentTarget.style.boxShadow = '4px 8px 0px var(--accent-main)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px var(--accent-main)';
                }
              }}
            >
              {f}
            </button>
          );
        })}
      </motion.div>

      {/* ── Project Grid ── */}
      <div
        className="w-full grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2.5rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1.5px solid var(--accent-main)',
                padding: '2.5rem',
                borderRadius: '0.5rem',
                boxShadow: '4px 4px 0px var(--accent-main)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                minHeight: '260px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(2px, 2px)';
                e.currentTarget.style.boxShadow = '2px 2px 0px var(--accent-main)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--accent-main)';
              }}
            >
              {/* Top */}
              <div className="flex flex-col" style={{ gap: '0.8rem', marginBottom: '2rem' }}>
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[0.6rem] uppercase"
                    style={{ letterSpacing: '0.15em', color: 'var(--accent-secondary)' }}
                  >
                    {p.category}
                  </span>
                  <span
                    className="font-mono text-[0.6rem]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    0{p.id}
                  </span>
                </div>
                <h3
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: '"Boldonse", system-ui',
                    fontSize: '1.3rem',
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-mono leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.7' }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap" style={{ gap: '0.5rem' }}>
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="font-mono uppercase"
                      style={{
                        fontSize: '0.6rem',
                        padding: '0.25rem 0.6rem',
                        border: '1px solid var(--accent-main)',
                        color: 'var(--accent-main)',
                        letterSpacing: '0.08em',
                        borderRadius: '0.25rem',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="font-mono"
                  style={{ color: 'var(--accent-main)', fontSize: '1rem', marginLeft: '1rem' }}
                >
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}