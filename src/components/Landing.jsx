import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import walkLeft from '../assets/walk-left.webp';
import walkCenter from '../assets/walk-center.webp';
import walkRight from '../assets/walk-right.webp';
import restbopImg from '../assets/restbop.webp';

import { phrases } from '../constants/portfolioData';

const walkSequence = [walkLeft, walkRight, walkCenter, walkRight];
const idleSequence = [walkCenter, restbopImg];

export default function Landing() {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const [stage, setStage] = useState(prefersReduced ? 'typing' : 'walking');
  const [frameIndex, setFrameIndex] = useState(0);
  const [idleIndex, setIdleIndex] = useState(0);
  const [text, setText] = useState(prefersReduced ? phrases[0] : '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  /* ── Walk frames (bypassed if reduced motion is requested) ── */
  useEffect(() => {
    if (stage !== 'walking' || prefersReduced) return;
    const id = setInterval(() =>
      setFrameIndex(prev => (prev + 1) % walkSequence.length), 180);
    return () => clearInterval(id);
  }, [stage, prefersReduced]);

  /* ── Idle alternation every 2s ── */
  useEffect(() => {
    if (stage !== 'typing') return;
    const id = setInterval(() =>
      setIdleIndex(prev => (prev + 1) % idleSequence.length), 2000);
    return () => clearInterval(id);
  }, [stage]);

  /* ── Typewriter (bypassed if reduced motion is requested) ── */
  useEffect(() => {
    if (stage !== 'typing' || prefersReduced) return;
    const phrase = phrases[loop % phrases.length];
    const delay = isDeleting ? 45 : 90;
    const id = setTimeout(() => {
      if (!isDeleting) {
        const next = phrase.substring(0, text.length + 1);
        setText(next);
        if (next === phrase) setTimeout(() => setIsDeleting(true), 2200);
      } else {
        const next = phrase.substring(0, text.length - 1);
        setText(next);
        if (next === '') { setIsDeleting(false); setLoop(l => l + 1); }
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, isDeleting, loop, stage, prefersReduced]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="section-container flex flex-col md:flex-row items-center justify-start gap-8 md:gap-14 lg:gap-20 py-20">
        {/* Pixel Character */}
        <motion.div
          className="shrink-0 w-32 h-64 sm:w-40 sm:h-80 md:w-48 md:h-96"
          initial={prefersReduced ? { x: 0, opacity: 1 } : { x: '-30vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 1.8, ease: 'easeOut' }}
          onAnimationComplete={() => setStage('typing')}
        >
          <img
            src={stage === 'walking' ? walkSequence[frameIndex] : idleSequence[idleIndex]}
            alt="Partish pixel character"
            className="w-full h-full object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {stage === 'typing' && (
            <motion.div
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.3 }}
            >
              <h1 className="name-big">
                <span className="highlight">Partish.</span>
              </h1>
              <div
                className="font-mono flex items-center justify-center md:justify-start"
                style={{
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
                  letterSpacing: '0.12em',
                  color: 'var(--text-secondary)',
                  gap: '4px',
                  borderLeft: '2px solid var(--accent-sage)',
                  paddingLeft: '0.75rem',
                  marginTop: '1.5rem',
                }}
              >
                <span>{text}</span>
                {!prefersReduced && (
                  <span className="cursor-blink" style={{ color: 'var(--accent-sage)' }}>█</span>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
