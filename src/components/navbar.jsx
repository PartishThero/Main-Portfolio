import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import spriteSheet from '../assets/image1-removebg.png';

const FRAME_W = 384;
const FRAME_H = 341;
const SCALE   = 4;

const sprite = (col, row, scale = SCALE) => ({
  backgroundImage:    `url(${spriteSheet})`,
  backgroundPosition: `-${col * FRAME_W / scale}px -${row * FRAME_H / scale}px`,
  backgroundSize:     `${4 * FRAME_W / scale}px ${3 * FRAME_H / scale}px`,
  backgroundRepeat:   'no-repeat',
  imageRendering:     'pixelated',
  width:              `${FRAME_W / scale}px`,
  height:             `${FRAME_H / scale}px`,
  flexShrink:         0,
});

const defaultSprite = sprite(0, 2);

const pageConfig = {
  '/about':    { spriteStyle: sprite(3, 2), message: "Ah, curious about me? Good taste!"       },
  '/skills':   { spriteStyle: sprite(3, 0), message: "Time to get nerdy. Let's gooo."          },
  '/projects': { spriteStyle: sprite(1, 1), message: "These are my babies. Handle with care."  },
  '/contact':  { spriteStyle: sprite(0, 0), message: "Let's build something awesome together!" },
};

export default function Navbar() {
  const location  = useLocation();
  const isLanding = location.pathname === '/';
  const config    = pageConfig[location.pathname];
  const navPadding = isLanding ? '3rem 3rem' : '0rem 3rem';

  const [showBubble,    setShowBubble]    = useState(false);
  const [currentSprite, setCurrentSprite] = useState(defaultSprite);
  const [menuOpen,      setMenuOpen]      = useState(false);

  useEffect(() => {
    if (!config) { setCurrentSprite(defaultSprite); setShowBubble(false); return; }
    setCurrentSprite(config.spriteStyle);
    setShowBubble(true);
    const timer = setTimeout(() => { setShowBubble(false); setCurrentSprite(defaultSprite); }, 5000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const activeLink = ({ isActive }) =>
    isActive ? 'text-(--accent-main)' : 'hover:text-(--accent-main) transition-colors';

  return (
    <>
      <nav
        style={{ padding: navPadding }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-transparent transition-all duration-300"
      >
        {!isLanding ? (
          <div className="flex items-center gap-3">
            <NavLink to="/" className="no-cursor hover:scale-110 transition-transform shrink-0">
              <div style={currentSprite} />
            </NavLink>
            <AnimatePresence>
              {showBubble && config && (
                <motion.div
                  initial={{ opacity: 0, x: -8, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0,  scale: 1 }}
                  exit={{ opacity: 0, x: -8, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="relative font-mono text-xs hidden sm:block"
                  style={{
                    backgroundColor: 'var(--bg-surface)', border: '1.5px solid var(--accent-main)',
                    borderRadius: '0.5rem', padding: '0.5rem 0.9rem', color: 'var(--text-primary)',
                    whiteSpace: 'nowrap', letterSpacing: '0.04em', boxShadow: '3px 3px 0px var(--accent-main)',
                  }}
                >
                  <span style={{
                    position: 'absolute', left: '-7px', top: '50%', transform: 'translateY(-50%)',
                    width: 0, height: 0, borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent', borderRight: '7px solid var(--accent-main)',
                  }} />
                  {config.message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div style={{ width: `${FRAME_W / SCALE}px` }} />
        )}

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 font-mono text-sm tracking-widest text-(--text-secondary)">
          <NavLink to="/about"    className={activeLink}>About</NavLink>
          <NavLink to="/skills"   className={activeLink}>Skills</NavLink>
          <NavLink to="/projects" className={activeLink}>Projects</NavLink>
          <NavLink to="/contact"  className={activeLink}>Contact</NavLink>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col justify-center gap-1.25 p-2 z-50" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--accent-main)', transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none') : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            {['/about', '/skills', '/projects', '/contact'].map((path, i) => (
              <motion.div key={path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <NavLink
                  to={path}
                  className={({ isActive }) => `font-mono text-3xl uppercase ${isActive ? 'text-(--accent-main)' : 'text-(--text-secondary)'}`}
                  style={{ letterSpacing: '0.2em' }}
                >
                  {path.replace('/', '')}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}