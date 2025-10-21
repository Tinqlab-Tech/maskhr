import React from "react";
import MainText from "../typography/MainText";

const OtherPageHero = ({ title, subtitle }) => {
  return (
    <div className="h-screen bg-herobg bg-cover bg-no-repeat bg-center py-[4vh] px-[6vw] ">
      <section className="flex   h-full  flex-col gap-4  items-center justify-center text-center mx-auto  md:w-3/4 ">
        <h1
          className={`text-[50px] leading-[50px tracking-tight font-bold font-lato`}
        >
          {title}
        </h1>

        <div className="px-[6vw] md:px-[8vw]">
          <MainText text={subtitle} color="text-mainBlack/50" />{" "}
        </div>
      </section>
    </div>
  );
};

export default OtherPageHero;
