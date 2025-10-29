'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '@/services/index';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

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
      const res = await postData('message/add', { ...data, from: 'MaskHr' });

      if (res.success) {
        setResponse({ type: 'success' });
      } else {
        setResponse({ type: 'error' });
      }

      // Clear response after 5 seconds
      setTimeout(() => {
        setResponse(null);
      }, 5000);
    } catch (error) {
      setResponse({ type: 'error' });
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
        className="flex rounded-[25px] bg-white p-[5px]"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className={`${
            errors.Email && 'border-primary focus:border-primary'
          } w-full rounded-[5px] bg-transparent px-[16px] outline-none placeholder:text-secondary focus:shadow-custom-primary md:w-[30vw]`}
          {...register('Email', { required: true })}
        />
        {errors.Email && (
          <span className="absolute ml-[10px] mt-[50px] text-[14px] text-red-400 md:text-[16]">
            Please enter an email address
          </span>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="relative flex items-center justify-center gap-2 text-nowrap rounded-[24px] bg-mainBlack px-[20px] py-[10px] text-white shadow-custom-secondary transition-all duration-500 hover:scale-105 active:scale-95"
        >
          {/* 🔄 Loading Spinner */}
          {isLoading && (
            <span
              className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
              aria-label="Loading..."
            ></span>
          )}

          {/* ✅ Success Icon */}
          {response?.type === 'success' && !isLoading && (
            <FaCheckCircle className="animate-pop text-xl text-green-400" />
          )}

          {/* ❌ Error Icon */}
          {response?.type === 'error' && !isLoading && (
            <FaTimesCircle className="animate-pop text-xl text-red-400" />
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
      {response?.type === 'success' && (
        <p className="mt-2 animate-fadeIn text-[10px] text-green-500">
          ✅ Message sent successfully!
        </p>
      )}
      {response?.type === 'error' && (
        <p className="mt-2 animate-fadeIn text-[10px] text-red-500">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default LoginForm;
