import React from "react";
import MainText from "../typography/MainText";

const BenefitCard = ({ bgImg, title, subtitle }) => {
  return (
    <div
      className={`${bgImg} flex flex-col justify-end gap-4 p-[20px] md:p-[30px] min-h-[40vh] max-h-[60vh] shadow-custom-secondary`}
    >
      <MainText text={title} color={"text-white"} textLeft={true} bold />
      <MainText text={subtitle} color={"text-white/60"} textLeft={true} />
    </div>
  );
};

export default BenefitCard;
