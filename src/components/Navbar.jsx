import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import headImg from '../assets/Sleepy pixel.webp';
import useIsMobile from '../hooks/useIsMobile';
import { sections, pageConfig, navLinks } from '../constants/portfolioData';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBubble, setShowBubble] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(headImg);
  const [bubbleMsg, setBubbleMsg] = useState('');
  const bubbleTimerRef = useRef(null);

  const isLanding = activeSection === 'home';
  const isMobile = useIsMobile();

  /* ── Intersection Observer — detects which section is visible ── */
  useEffect(() => {
    const observers = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── Trigger expression + bubble when section changes ── */
  useEffect(() => {
    const config = pageConfig[activeSection];

    if (bubbleTimerRef.current) {
      clearTimeout(bubbleTimerRef.current);
    }

    if (!config) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIcon(headImg);
      setShowBubble(false);
      return;
    }

    setCurrentIcon(config.icon);
    setBubbleMsg(config.message);
    setShowBubble(true);

    bubbleTimerRef.current = setTimeout(() => {
      setShowBubble(false);
      setCurrentIcon(headImg);
    }, 5000);

    return () => {
      if (bubbleTimerRef.current) {
        clearTimeout(bubbleTimerRef.current);
      }
    };
  }, [activeSection]);

  if (isMobile) return null;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-transparent transition-all duration-300"
      style={{ 
        padding: isLanding 
          ? 'clamp(1rem, 2vw, 2rem) clamp(1.5rem, 3vw, 3rem)' 
          : '0 clamp(1.5rem, 3vw, 3rem)' 
      }}
    >
      {/* LEFT: avatar + bubble */}
      {!isLanding ? (
        <div className="flex items-center gap-3">
          <button
            className="no-cursor hover:scale-110 transition-transform shrink-0"
            onClick={() => scrollTo('home')}
          >
            <img
              src={currentIcon}
              alt="Home"
              style={{ width: '100px', height: '100px', imageRendering: 'pixelated' }}
            />
          </button>

          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, x: -8, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative font-mono text-xs"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1.5px solid var(--accent-main)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.9rem',
                  color: 'var(--text-primary)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.04em',
                  boxShadow: '3px 3px 0px var(--accent-main)',
                }}
              >
                <span style={{
                  position: 'absolute', left: '-7px', top: '50%',
                  transform: 'translateY(-50%)', width: 0, height: 0,
                  borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
                  borderRight: '7px solid var(--accent-main)',
                }} />
                {bubbleMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div style={{ width: '48px' }} />
      )}

      {/* RIGHT: nav links */}
      <div className="flex gap-8 font-mono text-sm tracking-widest" style={{ color: 'var(--text-secondary)' }}>
        {navLinks.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-mono text-sm uppercase transition-colors duration-200"
            style={{
              letterSpacing: '0.12em',
              color: activeSection === id ? 'var(--accent-main)' : 'var(--text-secondary)',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}