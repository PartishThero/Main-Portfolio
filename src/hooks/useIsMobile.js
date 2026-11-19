import { useState, useEffect } from 'react';

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    let timerId;
    const handleResize = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => setIsMobile(window.innerWidth < breakpoint), 100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
