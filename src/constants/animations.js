export const fadeUp = (delay = 0, yOffset = 20) => ({
  initial: { opacity: 0, y: yOffset },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});
