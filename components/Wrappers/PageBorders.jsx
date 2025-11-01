import SectionAnimation from '@/animations/SectionAnimation';
import { ReactNode } from 'react';

export default function PageBorders({ children, background, padding }) {
  return (
    <SectionAnimation>
      <section
        className={`${
          background
            ? `${background} darks:bg-[#212124]`
            : 'darks:bg-[#212124] bg-white'
        } ${padding === null ? '' : 'px-[4vw] py-[10vh]'} overflow-hidden`}
      >
        {children}
      </section>
    </SectionAnimation>
  );
}
