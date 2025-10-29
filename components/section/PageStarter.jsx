import NormalText from "../typography/NormalText";
import ImageWrapper from "../Wrappers/ImageWrapper";
import MainText from "../typography/MainText";
import { HeaderOne } from "../typography/HeaderOne";
import MainBadge from "../button/MainBadge";
import ComponentAnimationOne from "@/animations/ComponentAnimationOne";
import ComponentAnimationTwo from "@/animations/ComponentAnimationTwo";

export default function PageStarter({
  title,
  subtitle,
  color,
  hasBadge,
  badgeText,
  badgeIcon,
}) {
  return (
    <ComponentAnimationTwo y={-100}>
      <div className="flex flex-col items-center gap-4 ">
        {hasBadge && <MainBadge text={badgeText} icon={badgeIcon} />}
        <div className="flex flex-col gap-4  md:w-1/2">
          {" "}
          <HeaderOne
            text={title}
            size={"text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px]"}
          />
          <MainText text={subtitle} color={"text-secondary"} />
        </div>
      </div>
    </ComponentAnimationTwo>
  );
}
