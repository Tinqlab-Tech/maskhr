import React from "react";
import MainText from "../typography/MainText";
import Link from "next/link";

const BlogCard = ({ heading, bgImg, subtitle, btnLink, btnText, title }) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Optional heading */}
      <MainText text={heading} textLeft={true} bold={true} />
      {/* Main card container */}
      <div
        className={`bg-white overflow-hidden flex flex-col justify-between rounded-[30px] shadow-custom-secondary h-full`}
      >
        {/* Background image + badge */}
        <div
          className={`${bgImg} bg-no-repeat bg-cover bg-top w-full h-[25vh] flex rounded-[30px] `}
        ></div>

        {/* Text content */}
        <div className="flex flex-col gap-4 md:gap-8 p-[20px] md:p-[30px]">
          <MainText
            text={title}
            size={"text-[22px]"}
            textLeft={true}
            bold={true}
          />
          <p className=" text-[8px]  leading-[10px] md:text-[16px] md:leading-[16px] text-center md:text-start text-mainBlack ">
            {`© ${new Date().getFullYear()} 17, Jan `}
          </p>
          <MainText text={subtitle} color="text-secondary" textLeft={true} />

          {/* button */}
          <Link href={btnLink}>
            <button
              type="button"
              className={`cursor-pointer font-normal   font-lato  flex text-primary  px-[20px]  gap-2 text-[10px] leading-[10px] md:text-[20px] md:leading-[20px] items-center w-1/2  md:justify-start justify-center   `}
            >
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
