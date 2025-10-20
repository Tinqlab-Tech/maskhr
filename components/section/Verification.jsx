import React from "react";
import { HeaderOne } from "../typography/HeaderOne";
import MainText from "../typography/MainText";
import { title } from "process";

const Verification = ({ titleColor }) => {
  const ourVerifications = [
    { title: "90%", subtitle: "Retention Rate" },
    { title: "15k+", subtitle: "Agents in our global talent pool" },
    {
      title: "48+hrs",
      subtitle: "To meet your first candidate and start scaling your team",
    },
  ];
  return (
    <div className="bg-white flex flex-col items-center gap-4 md:gap-8  mx-[8vw] my-[8vw] px-[4vw] py-[8vh] rounded-[10px] md:rounded-[20px] shadow-custom-secondary">
      <HeaderOne text={"See Verifiable Numbers"} />

      <div className="grid md:grid-cols-3 gap-4 md:justify-between w-full ">
        {ourVerifications.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col gap-4 px-[20px] items-center justify-center">
              <h2
                className={`${titleColor === true ? "text-primary" : "text-mainBlack"} text-[48px]   tracking-tight font-semibold font-lato`}
              >
                {item.title}
              </h2>
              <MainText text={item.subtitle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verification;
