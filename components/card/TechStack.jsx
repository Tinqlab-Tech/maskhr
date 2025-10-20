import React from "react";
import ImageWrapper from "../Wrappers/ImageWrapper";
import MainText from "../typography/MainText";

const TechStack = ({ icon, title }) => {
  return (
    <div
      className={`bg-darkGray p-[10px] md:p-[20px] rounded-[10px] md:rounded-[20px] shadow-custom-secondary h-full`}
    >
      <div className="flex flex-col gap-4 md:gap-8 justify-center items-center ">
        <ImageWrapper
          src={icon}
          alt={`MaskHr ${title}`}
          width={100}
          height={100}
          style={"bg-contain bg-no-repeat bg-center"}
        />
        <MainText text={title} color={"text-white"} />
      </div>
    </div>
  );
};

export default TechStack;
