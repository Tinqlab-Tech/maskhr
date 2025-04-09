import TitleText from "../typography/TitleText";
import NormalText from "../typography/NormalText";
import ImageWrapper from "../Wrappers/ImageWrapper";
import MainText from "../typography/MainText";

export default function PageStarter({ Title, SubtitleText, color }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <TitleText
        text={Title}
        color={color}
        size={"text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px]"}
      />
      <MainText text={SubtitleText} />
    </div>
  );
}
