import React from "react";

export const RelatedItemsTitle = ({ section }) => {
  return (
    <section className=" block font-Gilroy ">
      <h3 className="mb-[20px] text-[12px] font-normal leading-[20px] md:leading-[30px] lg:text-[18px]">
        Other {section} by <span className="font-bold">Onório Cutane </span>
      </h3>
    </section>
  );
};
