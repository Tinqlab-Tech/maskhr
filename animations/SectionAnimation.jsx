"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SectionAnimation({ y = 0, children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // Animate element appearance
    gsap.fromTo(
      el,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: -100,
        duration: 1,
        delay: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",

          toggleActions: "play none none reverse",
        },
      }
    );

    // Scroll to next section when element reaches the center
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "bottom bottom", // when this section's center hits viewport center

      onEnter: (self) => {
        if (self.direction === 1) {
          const next = el.nextElementSibling;
          if (next) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: next.offsetTop, autoKill: true },
              ease: "power2.inOut",
            });
          }
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={ref} className={`block  ${className}`}>
      {children}
    </div>
  );
}
