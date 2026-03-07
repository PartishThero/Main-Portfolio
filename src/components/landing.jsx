import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import walkLeft from '../assets/walk-left.png';
import walkCenter from '../assets/walk-center.png';
import walkRight from '../assets/walk-right.png';
import breatheImg from '../assets/breathe.png';
import './landing.css';

const phrases = [
  "I build digital experiences.",
  "Full-Stack Developer.",
  "Pixel Art Enthusiast.",
];

const walkSequence = [walkLeft, walkCenter, walkRight, walkCenter];

export default function App() {
  const [stage, setStage] = useState('walking');
  const [frameIndex, setFrameIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  /* ── Walk animation frames ── */
  useEffect(() => {
    if (stage !== 'walking') return;
    const id = setInterval(() =>
      setFrameIndex(prev => (prev + 1) % walkSequence.length), 180);
    return () => clearInterval(id);
  }, [stage]);

  /* ── Typewriter ── */
  useEffect(() => {
    if (stage !== 'typing') return;
    const phrase = phrases[loop % phrases.length];
    const delay = isDeleting ? 50 : 100;

    const id = setTimeout(() => {
      if (!isDeleting) {
        const next = phrase.substring(0, text.length + 1);
        setText(next);
        if (next === phrase) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        const next = phrase.substring(0, text.length - 1);
        setText(next);
        if (next === '') { setIsDeleting(false); setLoop(l => l + 1); }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, isDeleting, loop, stage]);

  return (
    /* portfolio-container */
    <div
      className="flex items-center justify-start"
      style={{ height: '100vh', width: '100vw', paddingLeft: '14vw', backgroundColor: 'var(--bg-primary)' }}
    >
      {/* layout-wrapper */}
      <div className="flex items-center" style={{ gap: '-50rem' }}>

        {/* character-box: 35.25rem × 35.25rem */}
        <motion.div
          className="shrink-0"
          style={{ width: '35.25rem', height: '35.25rem' }}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 3, ease: 'linear' }}
          onAnimationComplete={() => setStage('typing')}
        >
          <img
            src={stage === 'walking' ? walkSequence[frameIndex] : breatheImg}
            alt="Pixel Character"
            className={`w-full h-full ${stage === 'typing' ? 'idle-breathe' : ''}`}
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        {/* text-side */}
        <div className="flex flex-col" style={{ whiteSpace: 'normal' }}>
          {stage === 'typing' && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* "Hello! I am" */}
              <p
                className="font-mono text-base leading-none"
                style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}
              >
                Hello! I am
              </p>

              {/* Big name */}
              <h1 className="name-big">
                <span className="highlight">Partish.</span>
              </h1>

              {/* Typewriter box */}
              <div
                className="font-mono flex items-center"
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-secondary)',
                  gap: '2px',
                  borderLeft: '2px solid var(--accent-main)',
                  paddingLeft: '0.6rem',
                  marginTop: '3rem',
                }}
              >
                <span>{text}</span>
                <span className="cursor-blink" style={{ color: 'var(--accent-main)' }}>█</span>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}