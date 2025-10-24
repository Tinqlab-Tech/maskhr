"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "@/services/index";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const LoginForm = ({ btnText }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await postData("message/add", { ...data, from: "MaskHr" });

      if (res.success) {
        setResponse({ type: "success" });
      } else {
        setResponse({ type: "error" });
      }

      // Clear response after 5 seconds
      setTimeout(() => {
        setResponse(null);
      }, 5000);
    } catch (error) {
      setResponse({ type: "error" });
      setTimeout(() => setResponse(null), 5000);
    } finally {
      // Reset button state after animation
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <div className="flex flex-col items-start">
      {/* ===== Form ===== */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white flex p-[5px] rounded-[25px]"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className={`${
            errors.Email && "border-primary focus:border-primary"
          } w-full outline-none rounded-[5px] bg-transparent px-[16px] placeholder:text-secondary focus:shadow-custom-primary`}
          {...register("Email", { required: true })}
        />
        {errors.Email && (
          <span className="text-[14px] md:text-[16] text-red-400 absolute mt-[50px] ml-[10px]">
            Please enter an email address
          </span>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="relative flex text-nowrap justify-center items-center gap-2 bg-mainBlack text-white rounded-[24px] px-[20px] py-[10px] shadow-custom-secondary hover:scale-105 active:scale-95 transition-all duration-500 min-w-[120px]"
        >
          {/* 🔄 Loading Spinner */}
          {isLoading && (
            <span
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              aria-label="Loading..."
            ></span>
          )}

          {/* ✅ Success Icon */}
          {response?.type === "success" && !isLoading && (
            <FaCheckCircle className="text-green-400 text-xl animate-pop" />
          )}

          {/* ❌ Error Icon */}
          {response?.type === "error" && !isLoading && (
            <FaTimesCircle className="text-red-400 text-xl animate-pop" />
          )}

          {/* Default Text + Arrow (only if no loading or response) */}
          {!isLoading && !response && (
            <>
              {btnText}
              <FaArrowRightLong size={15} />
            </>
          )}
        </button>
      </form>

      {/* ===== Message outside (below entire form) ===== */}
      {response?.type === "success" && (
        <p className="text-green-500 text-[10px] mt-2 animate-fadeIn">
          ✅ Message sent successfully!
        </p>
      )}
      {response?.type === "error" && (
        <p className="text-red-500 text-[10px] mt-2  animate-fadeIn">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default LoginForm;
