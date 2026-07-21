import React, { useEffect, useState, useRef } from 'react';

const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const CustomCursor = () => {
  const isTouch = isTouchDevice();
  const rafRef = useRef(null);

  const [cursorStyle, setCursorStyle] = useState({
    width: 20,
    height: 20,
    borderRadius: '100%',
    opacity: 1,
    isMagnetic: false,
    left: -100,
    top: -100,
  });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isTouch) return; // don't attach on touch devices

    const moveCursor = (e) => {
      const { clientX, clientY, target } = e;

      if (!target) return;

      // Throttle to one update per animation frame to avoid excessive re-renders
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (target.closest('.no-cursor')) {
          setCursorStyle({ width: 20, height: 20, left: clientX, top: clientY, borderRadius: '100%', opacity: 1, isMagnetic: false });
          return;
        }

        const hoverable = target.closest('a:not(.logo-link), button, .hover-target');
        const isText = target.closest('p, span, h1, h2, h3, h4, h5, h6, li, code');

        if (hoverable) {
          setCursorStyle({
            width: 48,
            height: 48,
            left: clientX,
            top: clientY,
            borderRadius: '100%',
            opacity: 0.4,
            isMagnetic: false,
          });
        } else if (isText) {
          setCursorStyle({ width: 2, height: 24, left: clientX, top: clientY, borderRadius: '0px', opacity: 1, isMagnetic: false });
        } else {
          setCursorStyle({ width: 20, height: 20, left: clientX, top: clientY, borderRadius: '100%', opacity: 1, isMagnetic: false });
        }
      });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup',   handleMouseUp);
    };
  }, [isTouch]);

  if (isTouch) return null; // render nothing on touch devices

  return (
    <div
      className={`fixed pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2
                  transition-all duration-300 ease-out will-change-[width,height,top,left]
                  ${isClicked ? 'scale-75' : 'scale-100'}`}
      style={{
        left: cursorStyle.left,
        top: cursorStyle.top,
        width: cursorStyle.width,
        height: cursorStyle.height,
        borderRadius: cursorStyle.borderRadius,
        opacity: cursorStyle.opacity,
        backgroundColor: 'var(--accent-main)',
        mixBlendMode: 'normal',
        boxShadow: cursorStyle.isMagnetic ? 'none' : '0 0 10px var(--accent-main)',
      }}
    />
  );
};

export default CustomCursor;