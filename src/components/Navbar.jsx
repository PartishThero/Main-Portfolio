import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import headImg from '../assets/sleepy-pixel.webp';
import { sections, pageConfig, navLinks } from '../constants/portfolioData';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar({ activeSection: controlledSection, onActiveSectionChange }) {
  const [internalSection, setInternalSection] = useState('home');
  const activeSection = controlledSection !== undefined ? controlledSection : internalSection;
  const setActiveSection = onActiveSectionChange || setInternalSection;
  const [showBubble, setShowBubble] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(headImg);
  const [bubbleMsg, setBubbleMsg] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bubbleTimerRef = useRef(null);

  const isLanding = activeSection === 'home';

  /* ── Intersection Observer: reliable across tall & short sections ── */
  useEffect(() => {
    const mainScroll = document.getElementById('main-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: mainScroll || null,
        threshold: [0.15, 0.35, 0.6],
        rootMargin: '-15% 0px -40% 0px',
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Trigger expression + bubble when section changes ── */
  useEffect(() => {
    const config = pageConfig[activeSection];

    if (bubbleTimerRef.current) {
      clearTimeout(bubbleTimerRef.current);
    }

    if (!config) {
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
    }, 4500);

    return () => {
      if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    };
  }, [activeSection]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="section-container flex items-center justify-between py-3 md:py-5">
        {/* LEFT: mascot avatar + speech bubble */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => scrollTo('home')}
            aria-label="Home"
            className="group min-w-[44px] min-h-[44px] flex items-center justify-center p-1 rounded transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-(--accent-main)"
          >
            <img
              src={currentIcon}
              alt="Mascot Avatar"
              className="w-10 h-10 md:w-14 md:h-14 transition-transform group-hover:scale-105"
              style={{ imageRendering: 'pixelated' }}
            />
          </button>

          <AnimatePresence>
            {showBubble && !isLanding && (
              <motion.div
                initial={{ opacity: 0, x: -8, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="relative font-mono text-[0.7rem] md:text-xs max-w-[200px] sm:max-w-xs md:max-w-sm"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1.5px solid var(--accent-main)',
                  borderRadius: '0.375rem',
                  padding: '0.4rem 0.75rem',
                  color: 'var(--text-primary)',
                  boxShadow: '2px 2px 0px var(--accent-main)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                    borderRight: '6px solid var(--accent-main)',
                  }}
                />
                {bubbleMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT (Desktop): nav links */}
        <nav aria-label="Main Navigation" className="pointer-events-auto hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-current={isActive ? 'page' : undefined}
                className="transition-colors duration-150 py-2 px-1 min-h-[44px] flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-(--accent-main)"
                style={{
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontWeight: isActive ? 600 : 400,
                  borderBottom: isActive ? '2px solid var(--accent-sage)' : '2px solid transparent',
                }}
              >
                {isActive && <span className="font-pixel text-[10px] text-(--accent-sage)">▸</span>}
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT (Mobile): hamburger toggle */}
        <div className="pointer-events-auto flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded text-(--text-primary) border border-(--accent-main)/40 bg-(--bg-surface)/80 backdrop-blur-md active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              {mobileMenuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-auto md:hidden mx-4 mt-1 p-4 rounded-lg bg-(--bg-surface) border border-(--border-strong) shadow-xl flex flex-col gap-2 font-mono text-xs uppercase tracking-wider"
          >
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className="min-h-[44px] flex items-center justify-between px-3 rounded text-left transition-colors"
                  style={{
                    backgroundColor: isActive ? 'rgba(78, 127, 104, 0.15)' : 'transparent',
                    color: isActive ? 'var(--accent-sage)' : 'var(--text-primary)',
                  }}
                >
                  <span>{label}</span>
                  {isActive && <span className="text-[10px] text-(--accent-sage)">●</span>}
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}