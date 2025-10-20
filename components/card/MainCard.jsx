import React from "react";
import MainText from "../typography/MainText";
import Link from "next/link";
import { MainButton } from "../button/MainButton";

const MainCard = ({
  heading,
  bgImg,
  badge,
  subtitle,
  btnLink,
  btnText,
  btnStyle,
}) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Optional heading */}

      {/* Main card container */}
      <div
        className={`bg-white overflow-hidden flex flex-col justify-between rounded-[10px] md:rounded-[20px] shadow-custom-secondary h-full`}
      >
        {/* Background image + badge */}
        <div
          className={`bg-features4 bg-no-repeat bg-cover bg-center w-full h-[30vh] flex items-start `}
        >
          <span className="text-primary font-semibold  p-4  text-[14px]">
            {badge}
          </span>
        </div>

        {/* Text content */}
        <div className="flex flex-col space-y-4 p-[10px]">
          <MainText text={title} bold={true} textLeft={true} />
          <MainText text={subtitle} color="text-secondary" textLeft={true} />

          {/* button */}
          <Link href={btnLink}>
            <button
              className={`cursor-pointer font-normal rounded-[24px]   font-lato bg-mainBlack flex text-white w-full px-[20px] py-[10px] gap-2 text-[10px] leading-[10px] lg:text-[14px] lg:leading-[16px] items-center justify-center   `}
            >
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
