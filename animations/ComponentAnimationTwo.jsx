'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComponentAnimationTwo({
  x = 0,
  y = 0,
  opacity = 0,
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

    // Kill any old triggers if remounted
    ScrollTrigger.getAll().forEach((st) => st.trigger === el && st.kill());

    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        el,
        { opacity, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          ease: 'power3.out',
          paused: true,
        }
      );

      ScrollTrigger.create({
        trigger: parentSection,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => gsap.delayedCall(delay, () => anim.play()), // 👈 delay respected every time
        onLeaveBack: () => anim.reverse(), // reverse on scroll up
      });
    }, el);

    return () => ctx.revert(); // cleanup
  }, [x, y, opacity, duration, delay]);

  return (
    <div ref={ref} className={`h-full w-full ${className}`}>
      {children}
    </div>
  );
}
