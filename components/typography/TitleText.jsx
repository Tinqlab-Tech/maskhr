export default function TitleText({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : "text-mainBlack"} ${
        size
          ? size
          : "text-[16px] leading-[20px]  md:text-[16px] md:leading-[16px] lg:text-[24px] lg:leading-[24px]"
      } font-semibold font-Gilroy  `}
    >
      {text}
    </h1>
  );
}
