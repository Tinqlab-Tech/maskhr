import React from 'react';
import MainText from '../typography/MainText';

const BenefitCard = ({ bgImg, title, subtitle }) => {
  return (
    <div
      className={`${bgImg} flex h-[450px] w-full flex-col justify-end gap-4 bg-cover bg-center bg-no-repeat p-[30px]`}
    >
      <MainText text={title} color={'text-white'} textLeft={true} bold />
      <MainText text={subtitle} color={'text-white/60'} textLeft={true} />
    </div>
  );
};

export default BenefitCard;
