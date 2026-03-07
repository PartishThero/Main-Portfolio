import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorStyle, setCursorStyle] = useState({
    width: 20,
    height: 20,
    borderRadius: '100%',
    opacity: 1,
    isMagnetic: false
  });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY, target } = e;

      // Ignore anything marked no-cursor (e.g. the avatar sprite)
      if (target.closest('.no-cursor')) {
        setCursorStyle({
          width: 20,
          height: 20,
          left: clientX,
          top: clientY,
          borderRadius: '100%',
          opacity: 1,
          isMagnetic: false
        });
        return;
      }

      const hoverable = target.closest('a:not(.logo-link), button, .hover-target');
      const isText = target.closest('p, span, h1, h2, h3, h4, h5, h6, li, code');

      if (hoverable) {
        const rect = hoverable.getBoundingClientRect();
        setCursorStyle({
          width: rect.width + 12,
          height: rect.height + 12,
          left: rect.left + rect.width / 2,
          top: rect.top + rect.height / 2,
          borderRadius: '4px',
          opacity: 0.3,
          isMagnetic: true
        });
      } else if (isText) {
        setCursorStyle({
          width: 2,
          height: 24,
          left: clientX,
          top: clientY,
          borderRadius: '0px',
          opacity: 1,
          isMagnetic: false
        });
      } else {
        setCursorStyle({
          width: 20,
          height: 20,
          left: clientX,
          top: clientY,
          borderRadius: '100%',
          opacity: 1,
          isMagnetic: false
        });
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
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
        mixBlendMode: 'difference',
        boxShadow: cursorStyle.isMagnetic ? 'none' : '0 0 10px var(--accent-main)',
      }}
    />
  );
};

export default CustomCursor;