'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComponentAnimationOne({
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

    const parentSection = el.closest('section') || el;

    // Kill old triggers for this element
    ScrollTrigger.getAll().forEach((st) => st.trigger === el && st.kill());

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      // Pop + offset animation
      tl.fromTo(
        el,
        { scale: 0, x, y },
        {
          scale: 1,
          x: 0,
          y: 0,
          duration,
          ease: 'back.out(0.8)', // nice bounce
        }
      );

      ScrollTrigger.create({
        trigger: parentSection,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => gsap.delayedCall(delay, () => tl.play()),
        onLeaveBack: () => tl.reverse(),
      });
    }, el);

    return () => ctx.revert(); // Cleanup on unmount
  }, [x, y, duration, delay]);

  return (
    <div ref={ref} className={`h-full w-full ${className}`}>
      {children}
    </div>
  );
}
