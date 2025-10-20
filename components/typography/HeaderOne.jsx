import React from "react";

export const HeaderOne = ({ text, color, size, textLeft }) => {
  return (
    <h1
      className={` ${color ? color : "text-mainBlack"} ${
        size ? size : "text-[32px] leading-[38px]"
      } ${textLeft === true ? "text-left" : "text-center"} font-bold font-lato`}
    >
      {text}
    </h1>
  );
};
