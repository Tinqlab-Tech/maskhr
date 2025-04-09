"use client";
import React, { useContext, useEffect } from "react";
import CartContext from "@/context/cart/CartContext";
import { discountedPrice } from "@/utils";
import toast from "react-hot-toast";
import NormalText from "../typography/NormalText";

export const AddToCartButton = ({ text, product, type }) => {
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  const isInCart = () => {
    return cartItems.find((item) => item.id === product._id);
  };

  useEffect(() => {}, [product]);

  return (
    <>
      {" "}
      {!isInCart(product) ? (
        <button
          className={`my-[10px] w-full cursor-pointer font-Gilroy font-normal rounded-[8px] border-[1px] border-[#5D626B] bg-[#123171] px-[20px] py-[10px] text-[10px] text-white md:text-[14px]`}
          onClick={() => {
            addToCart({
              id: product._id,
              name: product.title,
              price: product.price,
              discount: 0,
              photo: product.photo,
              contentType: type,
            });
            toast.success(`Item added to cart`);
          }}
        >
          {text}
        </button>
      ) : (
        <>
          <NormalText
            text={"Item in cart"}
            size={"text-[14px] my-2"}
            color={"text-mainBlack darks:text-gray-200"}
          />
        </>
      )}
    </>
  );
};
