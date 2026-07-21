/**
 * Returns Framer Motion props for a fade-up entrance animation.
 * @param {number} [delay=0] - Delay before the animation starts (seconds)
 * @param {number} [yOffset=20] - Vertical offset to animate from (pixels)
 * @returns {{ initial, animate, transition }} - Spread onto a motion element
 */
export const fadeUp = (delay = 0, yOffset = 20) => ({
  initial: { opacity: 0, y: yOffset },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});
