import React from "react";
import { HeaderOne } from "../typography/HeaderOne";
import MainText from "../typography/MainText";
import { MainButton } from "../button/MainButton";
import { OutlineButton } from "../button/OutlineButton";
import ImageWrapper from "../Wrappers/ImageWrapper";
import Link from "next/link";

const MainHero = ({
  title = [], // expects an array of { text, color }
  subtitle,
  btnText1,
  btnText2,
  hasTech,
  technologies = [],
  titleSize,
  btnLink1,
  btnLink2,
}) => {
  const positions = [
    "top-5 left-60",
    "top-60 left-10",
    "bottom-10 left-60",
    "top-5 right-60",
    "top-60 right-10",
    "bottom-10 right-60",
  ];

  return (
    <div className="h-screen bg-herobg bg-cover bg-no-repeat bg-center relative py-[4vh] px-[6vw]">
      <section className="flex items-center justify-center h-full  ">
        <div className="flex flex-col gap-4  items-center text-center  md:w-3/4 ">
          {/* Title Section */}
          <h1
            className={`${titleSize ? titleSize : "text-[32px] leading-[38px]"} tracking-tight font-bold font-lato`}
          >
            {title.map((ld, i) => (
              <span key={i} className={ld.color || "text-mainBlack"}>
                {ld.text}{" "}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <div className="px-[6vw] md:px-[8vw]">
              <MainText text={subtitle} color="text-mainBlack/50" />{" "}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 md:gap-8 mt-4">
            {btnText1 && btnLink1 && (
              <Link href={btnLink1}>
                <MainButton text={btnText1} hasIcon={true} />
              </Link>
            )}
            {btnText2 && btnLink2 && (
              <Link href={btnLink2}>
                <OutlineButton text={btnText2} hasIcon={true} />
              </Link>
            )}
          </div>

          {/* Floating Tech Icons */}
          {hasTech && technologies.length > 0 && (
            <>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`absolute bg-white  rounded-[20px] p-4 hidden xl:block shadow-custom-secondary  ${positions[index % positions.length]}`}
                >
                  <ImageWrapper
                    src={tech}
                    alt={`Tech Icon ${index + 1}`}
                    width={80}
                    height={80}
                    style="w-20 h-20 object-contain"
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default MainHero;
