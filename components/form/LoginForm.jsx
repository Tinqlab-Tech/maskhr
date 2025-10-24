import React from "react";
import { MainButton } from "../button/MainButton";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const LoginForm = () => {
  return (
    <form className="bg-white flex p-[5px] rounded-[25px] ">
      <input
        type="email"
        placeholder="Enter Your Email"
        className="bg-transparent outline-none pl-[10px] md:pr-[20vh]"
      />

      <button
        type="submit"
        className={`bg-mainBlack cursor-pointer font-normal rounded-[24px]   font-lato flex text-white  px-[20px] py-[15px] gap-2 text-[12px] md:text-[14px] leading-[10px] lg:text-[16px] lg:leading-[16px] items-center justify-center  shadow-custom-secondary hover:scale-105 active:scale-75 transition-all duration-500 text-nowrap`}
      >
        {"Lets go!"}
        <FaArrowRightLong size={15} />
      </button>
    </form>
  );
};

export default LoginForm;
