import { FaArrowRightLong } from "react-icons/fa6";

export const OutlineButton = ({ text, bgColor, hasIcon }) => {
  return (
    <button
      className={`cursor-pointer font-normal rounded-[24px]   font-lato ${
        bgColor ? bgColor : "bg-Transparent"
      } flex  text-mainBlack border border-mainBlack px-[20px] py-[15px] gap-2 text-[14px] leading-[10px] lg:text-[16px] lg:leading-[16px] items-center justify-center shadow-custom-secondary`}
    >
      {text}
      {hasIcon === true && <FaArrowRightLong size={15} />}
    </button>
  );
};
