import { ReactNode } from "react";

export default function PageBorders({ children, background, padding }) {
  return (
    <section
      className={`${
        background
          ? `${background} darks:bg-[#212124]`
          : "bg-white darks:bg-[#212124]"
      }          ${padding === null ? "" : "px-[4vw] py-[10vh] "}    `}
    >
      {children}
    </section>
  );
}
