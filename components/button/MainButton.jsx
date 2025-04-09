export const MainButton = ({ text, bgcolor, textColor }) => {
  return (
    <button
      className={`cursor-pointer font-normal rounded-[5px] shadow-lg  font-Gilroy ${
        bgcolor ? bgcolor : "bg-primary"
      } ${
        bgcolor == "bg-white" ? "text-mainBlack" : "text-white"
      } px-[16px] py-[8px] md:px-[32px] md:py-[12px] text-[10px] md:semi-bold  md:text-[14px] tracking-wider`}
    >
      {text}
    </button>
  );
};
