export default function MainText({ text, color, size, bold, textLeft }) {
  return (
    <p
      className={`${
        size
          ? size
          : "text-[14px] leading-[20px] tracking-normal  md:text-[16px] lg:text-[16px] md:leading-[28px]"
      } ${color ? color : "text-mainBlack"} ${
        bold === true ? "font-bold" : "font-extralight"
      } ${textLeft === true ? "text-center md:text-left" : "text-center"} font-lato`}
    >
      {text}
    </p>
  );
}
