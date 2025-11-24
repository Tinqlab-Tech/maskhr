import React from 'react';
import MainText from '../typography/MainText';

const BenefitCard = ({ bgImg, title, subtitle }) => {
  return (
    <div
      className={`${bgImg} flex h-[500px] w-full items-end justify-center bg-cover bg-center bg-no-repeat`}
    >
      <div className="flex flex-col gap-4 p-[30px]">
        <MainText
          text={title}
          color={'text-white'}
          size={'text-[24px]'}
          textLeft={true}
          bold
        />
        <MainText text={subtitle} color={'text-white/60'} textLeft={true} />
      </div>
    </div>
  );
};

export default BenefitCard;
