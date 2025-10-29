import React from 'react';
import MainText from '../typography/MainText';
import ComponentAnimationOne from '@/animations/ComponentAnimationOne';
import OtherAnimation from '@/animations/OthherAnimationn';

const OtherPageHero = ({ title, subtitle }) => {
  return (
    <section className="h-screen bg-herobg bg-cover bg-center bg-no-repeat px-[6vw] py-[4vh]">
      <OtherAnimation>
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-lato text-[50px] font-bold leading-[50px] tracking-tight">
            {title}
          </h1>
          <div className="px-[6vw] md:px-[8vw]">
            <MainText text={subtitle} color="text-mainBlack/50" />
          </div>
        </div>
      </OtherAnimation>
    </section>
  );
};

export default OtherPageHero;
