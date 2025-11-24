import React from 'react';
import MainText from '../typography/MainText';
import OtherAnimation from '@/animations/OthherAnimationn';
import Header from '../partials/Header';

const OtherPageHero = ({ title, subtitle }) => {
  return (
    <section className="h-screen bg-herobg bg-cover bg-bottom bg-no-repeat">
      <Header />
      <OtherAnimation>
        <div className="flex h-full flex-col items-center justify-center gap-4 px-[6vw] text-center">
          <h1 className="font-lato text-[50px] font-bold leading-[50px] tracking-normal">
            {title}
          </h1>
          <div className="">
            <MainText text={subtitle} color="text-mainBlack/50" />
          </div>
        </div>
      </OtherAnimation>
    </section>
  );
};

export default OtherPageHero;
