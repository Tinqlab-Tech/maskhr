export const OutlineButton = ({ text, textColor }) => {
  return (
    <button
      className={` cursor-pointer font-Gilroy darks:border-grayText darks:text-grayText font-normal rounded-[5px] border-[1px] border-primary px-[20px] py-[10px] text-[10px] text-primary md:text-[14px]`}
    >
      {text}
    </button>
  );
};
