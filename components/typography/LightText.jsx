export default function LightText({ text, color, size }) {
  return (
    <p
      className={`font-Gilroy ${
        size ? size : "text-[12px] leading-[16px] md:leading-[20px]"
      } ${color ? color : "text-[#575859]"}  font-extralight `}
    >
      {text}
    </p>
  );
}
