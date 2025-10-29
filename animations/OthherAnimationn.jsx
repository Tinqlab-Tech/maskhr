'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function OtherAnimation({
  x = 0,
  y = 0,
  duration = 1.2,
  delay = 0,
  children,
  className = '',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        el,
        { scale: 0, x, y },
        {
          scale: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'back.out(1)',
        }
      );
    }, el);

    return () => ctx.revert(); // Cleanup on unmount
  }, [x, y, duration, delay]);

  return (
    <div ref={ref} className={`h-full w-full ${className}`}>
      {children}
    </div>
  );
}
