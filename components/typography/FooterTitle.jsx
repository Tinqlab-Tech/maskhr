export default function FooterTitle({ text, color }) {
  return (
    <h2
      className={`${
        color ? color : "text-mainBlack"
      } mb-[8px]  pt-[8px] text-[20px] font-bold leading-[20px] md:pt-0 font-Gilroy`}
    >
      {text}
    </h2>
  );
}
