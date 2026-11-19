import React, { useEffect, useState, useRef } from 'react';

const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

const CustomCursor = () => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);
  const [hoverType, setHoverType] = useState('default'); // 'default' | 'hoverable' | 'text' | 'hidden'
  const [isClicked, setIsClicked] = useState(false);
  const currentHoverRef = useRef('default');

  useEffect(() => {
    if (!isFinePointer()) return;

    setActive(true);
    document.documentElement.classList.add('has-custom-cursor');

    let posX = -100;
    let posY = -100;

    const onMouseMove = (e) => {
      posX = e.clientX;
      posY = e.clientY;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }

      const target = e.target;
      if (!target) return;

      const isInput = target.closest('input, textarea, [contenteditable="true"]');
      if (isInput) {
        if (currentHoverRef.current !== 'hidden') {
          currentHoverRef.current = 'hidden';
          setHoverType('hidden');
        }
        return;
      }

      const hoverable = target.closest('a, button, [role="button"], .hover-target');
      const isText = target.closest('p, span, h1, h2, h3, h4, h5, h6, li, code');

      let nextType = 'default';
      if (hoverable) nextType = 'hoverable';
      else if (isText) nextType = 'text';

      if (currentHoverRef.current !== nextType) {
        currentHoverRef.current = nextType;
        setHoverType(nextType);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => {
      currentHoverRef.current = 'hidden';
      setHoverType('hidden');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!active) return null;

  if (hoverType === 'hidden') {
    return (
      <div
        ref={wrapperRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          opacity: 0,
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    );
  }

  // Derive inner visual styles based on hover state
  let width = 14;
  let height = 14;
  let borderRadius = '50%';
  let opacity = 0.85;
  let scale = isClicked ? 0.8 : 1;
  let bg = 'var(--accent-main)';
  let border = 'none';

  if (hoverType === 'hoverable') {
    width = 36;
    height = 36;
    borderRadius = '50%';
    opacity = 0.35;
    scale = isClicked ? 1.05 : 1.25;
    border = '1.5px solid var(--accent-main)';
  } else if (hoverType === 'text') {
    width = 2;
    height = 18;
    borderRadius = '1px';
    opacity = 0.9;
    scale = 1;
  }

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius,
          opacity,
          backgroundColor: bg,
          border,
          boxShadow: hoverType === 'hoverable' ? '0 0 10px var(--accent-main)' : 'none',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transition: 'width 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.15s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.12s ease-out, border-radius 0.15s ease, opacity 0.15s ease, background-color 0.15s ease',
        }}
      />
    </div>
  );
};

export default CustomCursor;