/**
 * Returns Framer Motion props for an accessible entrance animation
 * that respects prefers-reduced-motion.
 * @param {number} [delay=0] - Delay before the animation starts (seconds)
 * @param {number} [yOffset=16] - Vertical offset to animate from (pixels)
 * @returns {{ initial, animate, transition }} - Spread onto a motion element
 */
export const fadeUp = (delay = 0, yOffset = 16) => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: yOffset },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: 'easeOut' },
  };
};
