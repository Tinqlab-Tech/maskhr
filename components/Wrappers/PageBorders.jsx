import { ReactNode } from "react";

export default function PageBorders({ children, background }) {
  return (
    <div
      className={`${
        background
          ? `${background} darks:bg-[#212124]`
          : "bg-white darks:bg-[#212124]"
      } px-[20px] py-[40px]  md:px-[40px] md:py-[60px] lg:px-[80px] lg:py-[80px] `}
    >
      {children}
    </div>
  );
}
