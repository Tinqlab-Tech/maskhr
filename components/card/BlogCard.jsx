import React from "react";
import MainText from "../typography/MainText";
import Link from "next/link";
import ImageWrapper from "../Wrappers/ImageWrapper";

const BlogCard = ({ heading, bgImg, subtitle, btnLink, btnText, title }) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <MainText text={heading} textLeft={true} bold={true} />
      {/*  card container */}
      <div
        className={`bg-white overflow-hidden flex flex-col justify-between rounded-[20px] shadow-custom-secondary h-full`}
      >
        {/* image */}
        <ImageWrapper
          src={bgImg}
          alt="Mask Hr Blog"
          width={1440}
          height={470}
          style="w-full  bg-cover bg-top bg-no-repeat"
        />

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
          <div className="flex justify-center md:justify-start">
            <Link href={btnLink}>
              <button
                type="button"
                className={`cursor-pointer font-normal   font-lato  flex text-primary  px-[20px]  gap-2 text-[10px] leading-[10px] md:text-[20px] md:leading-[20px] items-center md:w-1/2  md:justify-start justify-center   `}
              >
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
