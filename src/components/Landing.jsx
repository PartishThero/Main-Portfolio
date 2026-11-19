import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import walkLeft from '../assets/walk-left.webp';
import walkCenter from '../assets/walk-center.webp';
import walkRight from '../assets/walk-right.webp';
import restbopImg from '../assets/restbop.webp';

import useIsMobile from '../hooks/useIsMobile';
import { phrases } from '../constants/portfolioData';

const walkSequence = [walkLeft, walkRight, walkCenter, walkRight];
const idleSequence = [walkCenter, restbopImg];

export default function Landing() {
  const [stage, setStage] = useState('walking');
  const [frameIndex, setFrameIndex] = useState(0);
  const [idleIndex, setIdleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  
  const isMobile = useIsMobile();

  useEffect(() => {
    if (stage !== 'walking') return;
    const id = setInterval(() =>
      setFrameIndex(prev => (prev + 1) % walkSequence.length), 180);
    return () => clearInterval(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'typing') return;
    const id = setInterval(() =>
      setIdleIndex(prev => (prev + 1) % idleSequence.length), 2000);
    return () => clearInterval(id);
  }, [stage]);

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

  if (isMobile) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          overflow: 'hidden',
          paddingTop: '5rem',
          paddingBottom: '2rem',
        }}
      >
        <motion.div
          style={{ width: '8rem', height: '16rem', flexShrink: 0 }}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 2.5, ease: 'linear' }}
          onAnimationComplete={() => setStage('typing')}
        >
          <img
            src={stage === 'walking' ? walkSequence[frameIndex] : idleSequence[idleIndex]}
            alt="Pixel Character"
            className="w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        <div style={{ textAlign: 'center' }}>
          {stage === 'typing' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
            >
              <p className="font-mono text-sm" style={{ color: 'var(--primary)', letterSpacing: '0.05em' }}>
                Hello! I am
              </p>
              <h1 className="name-big" style={{ textAlign: 'center', fontSize: '3rem', maxWidth: 'none' }}>
                <span className="highlight">Partish.</span>
              </h1>
              <div
                className="font-mono flex items-center"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                  gap: '2px',
                  borderLeft: '2px solid var(--primary)',
                  paddingLeft: '0.5rem',
                  marginTop: '0.5rem',
                }}
              >
                <span>{text}</span>
                <span className="cursor-blink" style={{ color: 'var(--primary)' }}>█</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-start"
      style={{
        height: '100vh',
        width: '100vw',
        paddingLeft: '7vw',
        backgroundColor: 'transparent',
        overflow: 'hidden',
      }}
    >
      <div className="flex items-center">
        <motion.div
          className="shrink-0"
          style={{ width: '12rem', height: '24rem', marginRight: '5rem', marginLeft: '30rem' }}
          initial={{ x: '-60vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 3, ease: 'linear' }}
          onAnimationComplete={() => setStage('typing')}
        >
          <img
            src={stage === 'walking' ? walkSequence[frameIndex] : idleSequence[idleIndex]}
            alt="Pixel Character"
            className="w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        <div className="flex flex-col" style={{ whiteSpace: 'normal' }}>
          {stage === 'typing' && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className="font-mono text-base leading-none"
                style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}
              >
                Hello! I am
              </p>
              <h1 className="name-big">
                <span className="highlight">Partish.</span>
              </h1>
              <div
                className="font-mono flex items-center"
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  color: 'var(--muted)',
                  gap: '2px',
                  borderLeft: '2px solid var(--primary)',
                  paddingLeft: '0.6rem',
                  marginTop: '3rem',
                }}
              >
                <span>{text}</span>
                <span className="cursor-blink" style={{ color: 'var(--primary)' }}>█</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
