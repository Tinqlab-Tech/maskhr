import { MdDashboard } from "react-icons/md";

export const DashboardButton = ({ text, bgcolor, textColor }) => {
  return (
    <button
      className={`cursor-pointer font-bold flex items-center justify-center gap-2 font-Gilroy rounded-[8px] border-[1px] border-[#5D626B] darks:border-none bg-[#123171] px-[20px] py-[10px] text-[10px] text-white md:text-[14px]`}
    >
      <MdDashboard />
      {text}
    </button>
  );
};
