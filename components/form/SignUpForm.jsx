'use client';

import React, { useState, useEffect } from 'react';
import MainText from '../typography/MainText';
import { useForm } from 'react-hook-form';
import { postData } from '@/services/index';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

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
      const res = await postData('message/add', { ...data, from: 'MaskHr' });

      if (res.success) {
        setResponse({ type: 'success' });
        reset(); // <-- Clear all fields after success
      } else {
        setResponse({ type: 'error' });
      }

      // Remove response after 5 seconds
      setTimeout(() => setResponse(null), 5000);
    } catch (error) {
      setResponse({ type: 'error' });
      setTimeout(() => setResponse(null), 5000);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <div className="flex items-center justify-center rounded-[20px] bg-lightGray p-6">
      <div className="block w-full max-w-md space-y-5 rounded-[30px] bg-white p-4">
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
              className="w-full rounded-[10px] border border-secondary p-2 outline-none focus:shadow-custom-secondary"
              {...register('fullName', { required: true })}
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
              className="w-full rounded-[10px] border border-secondary p-2 outline-none focus:shadow-custom-secondary"
              {...register('Email', { required: true })}
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
              className="w-full rounded-[10px] border border-secondary p-2 outline-none focus:shadow-custom-secondary"
              {...register('Password', { required: true })}
            />
            {errors.Password && (
              <span className="text-xs text-red-400">Password is required</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" {...register('agree')} />
            <MainText text="I agree to the terms of use and privacy policy" />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`relative flex w-full items-center justify-center gap-2 text-nowrap rounded-[10px] bg-mainBlack p-2 shadow-custom-secondary transition-all duration-500 ${
              !isFormValid
                ? 'cursor-not-allowed text-white/50 opacity-85'
                : 'font-semibold text-white opacity-100 hover:scale-105 active:scale-95'
            }`}
          >
            {isLoading && (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            )}
            {response?.type === 'success' && !isLoading && (
              <FaCheckCircle className="animate-pop text-xl text-green-400" />
            )}
            {response?.type === 'error' && !isLoading && (
              <FaTimesCircle className="animate-pop text-xl text-red-400" />
            )}
            {!isLoading && !response && <>Continue with Email</>}
          </button>
        </form>

        {/* Message outside */}
        {response?.type === 'success' && (
          <p className="mt-4 animate-fadeIn text-sm text-green-500">
            Sign up successful!
          </p>
        )}
        {response?.type === 'error' && (
          <p className="mt-4 animate-fadeIn text-sm text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
