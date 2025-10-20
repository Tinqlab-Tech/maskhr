import React from "react";
import ImageWrapper from "../Wrappers/ImageWrapper";
import MainText from "../typography/MainText";

const HiringCard = ({ title, bgImg, subtitle, cardType = "type1" }) => {
  return (
    <div>
      {/* Card Type 1 */}
      {cardType === "type1" && (
        <div className="bg-lightGray flex flex-col justify-center items-center p-[20px] md:p-[30px] gap-4 md:gap-8 h-full rounded-[10px] md:rounded-[20px] shadow-custom-secondary">
          <h1 className="text-center text-[16px] leading-[20px] tracking-normal md:text-[22px] lg:text-[32px] md:leading-[32px] font-semibold font-lato">
            {title}
          </h1>
          <ImageWrapper
            src={bgImg}
            alt={`MaskHr Hiring ${title}`}
            width={100}
            height={100}
            style="hidden md:block bg-contain bg-no-repeat bg-center"
          />
          <MainText text={subtitle} color="text-secondary" />
        </div>
      )}

      {/* Card Type 2 */}
      {cardType === "type2" && (
        <div className="bg-lightGray grid md:grid-cols-2  items-center justify-center p-[20px] md:p-[30px] gap-4 h-full rounded-[10px] md:rounded-[20px] shadow-custom-secondary">
          <div className="flex flex-col justify-between gap-4 h-full">
            {" "}
            <h1 className="text-center md:text-left text-[16px] leading-[20px] tracking-normal md:text-[22px] lg:text-[32px] md:leading-[32px] font-semibold font-lato">
              {title}
            </h1>
            <MainText
              text={subtitle}
              color="text-secondary"
              textLeft={true}
            />{" "}
          </div>
          <ImageWrapper
            src={bgImg}
            alt={`MaskHr Hiring ${title}`}
            width={200}
            height={200}
            style="hidden md:block bg-contain bg-no-repeat bg-center mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default HiringCard;
