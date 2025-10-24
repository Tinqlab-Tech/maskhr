"use client";

import React, { useState, useEffect } from "react";
import MainText from "../typography/MainText";
import { useForm } from "react-hook-form";
import { postData } from "@/services/index";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset, // <- Add reset here
    formState: { errors },
  } = useForm();

  const watchAllFields = watch();

  useEffect(() => {
    const allFilled =
      watchAllFields.fullName &&
      watchAllFields.Email &&
      watchAllFields.Password &&
      watchAllFields.agree;
    setIsFormValid(allFilled);
  }, [watchAllFields]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await postData("message/add", { ...data, from: "MaskHr" });

      if (res.success) {
        setResponse({ type: "success" });
        reset(); // <-- Clear all fields after success
      } else {
        setResponse({ type: "error" });
      }

      // Remove response after 5 seconds
      setTimeout(() => setResponse(null), 5000);
    } catch (error) {
      setResponse({ type: "error" });
      setTimeout(() => setResponse(null), 5000);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <div className="flex items-center justify-center p-6 bg-lightGray rounded-[20px]">
      <div className="block p-4 bg-white rounded-[30px] space-y-5 w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <MainText text="Welcome to MaskHR" bold />
          <MainText text="Redefining remote work" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="block p-[10px]">
            <MainText text="Full Name" bold textLeft />
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-secondary outline-none focus:shadow-custom-secondary p-2 w-full rounded-[10px]"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-xs text-red-400">
                Full Name is required
              </span>
            )}
          </div>

          <div className="block p-[10px]">
            <MainText text="Email" bold textLeft />
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-secondary outline-none focus:shadow-custom-secondary p-2 w-full rounded-[10px]"
              {...register("Email", { required: true })}
            />
            {errors.Email && (
              <span className="text-xs text-red-400">Email is required</span>
            )}
          </div>

          <div className="block p-[10px]">
            <MainText text="Password" bold textLeft />
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-secondary outline-none focus:shadow-custom-secondary p-2 w-full rounded-[10px]"
              {...register("Password", { required: true })}
            />
            {errors.Password && (
              <span className="text-xs text-red-400">Password is required</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("agree")} />
            <MainText text="I agree to the terms of use and privacy policy" />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`relative flex text-nowrap justify-center items-center gap-2 w-full bg-mainBlack p-2 rounded-[10px] shadow-custom-secondary transition-all duration-500 ${
              !isFormValid
                ? "opacity-85 text-white/80 cursor-not-allowed"
                : "opacity-100 font-semibold text-white hover:scale-105 active:scale-95"
            }`}
          >
            {isLoading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {response?.type === "success" && !isLoading && (
              <FaCheckCircle className="text-green-400 text-xl animate-pop" />
            )}
            {response?.type === "error" && !isLoading && (
              <FaTimesCircle className="text-red-400 text-xl animate-pop" />
            )}
            {!isLoading && !response && <>Continue with Email</>}
          </button>
        </form>

        {/* Message outside */}
        {response?.type === "success" && (
          <p className="text-green-500 text-sm mt-4 animate-fadeIn">
            ✅ Sign up successful!
          </p>
        )}
        {response?.type === "error" && (
          <p className="text-red-500 text-sm mt-4 animate-fadeIn">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
