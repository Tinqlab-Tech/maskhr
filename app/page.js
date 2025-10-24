import MainHero from "@/components/hero/MainHero";
import TextLeftPageStarter from "@/components/section/TextLeftPageStarter";
import PageBorders from "@/components/Wrappers/PageBorders";
import react from "@/public/images/tech/React.png";
import angular from "@/public/images/tech/Angular.png";
import swift from "@/public/images/tech/Swift.png";
import python from "@/public/images/tech/Python.png";
import vue from "@/public/images/tech/vue.png";
import figma from "@/public/images/tech/figma2.png";
import callCenter from "@/public/images/tech/callCenter.png";
import aws from "@/public/images/tech/Aws.png";
import android from "@/public/images/tech/Android.png";
import zendex from "@/public/images/tech/Zendex.png";
import translators from "@/public/images/tech/translators.png";
import PageStarter from "@/components/section/PageStarter";
import HiringCard from "@/components/card/HiringCard";
import features2 from "@/public/images/featuresbg/features2.png";
import features3 from "@/public/images/featuresbg/features3.png";
import vector1 from "@/public/images/icons/vector1.png";
import vector2 from "@/public/images/icons/vector2.png";
import vector3 from "@/public/images/icons/vector3.png";
import vector4 from "@/public/images/icons/vector4.png";
import vector5 from "@/public/images/icons/vector5.png";
import ConceptCard from "@/components/card/ConceptCard";
import LightPageStarter from "@/components/section/LightPageStarter";
import TechStack from "@/components/card/TechStack";
import MainCard from "@/components/card/BlogCard";
import { MainButton } from "@/components/button/MainButton";
import Link from "next/link";
import MainText from "@/components/typography/MainText";
import BenefitCard from "@/components/card/BenefitCard";
import ImageWrapper from "@/components/Wrappers/ImageWrapper";
import maxwell from "@/public/images/maxwell.png";
import DoublePageBorders from "@/components/Wrappers/DoublePageBorders";
import LogoWhite from "@/public/images/logoWhite.png";
import LoginForm from "@/components/form/LoginForm";
import Verification from "@/components/section/Verification";
import SignUpForm from "@/components/form/SignUpForm";

export const metadata = {
  title: "Mask HR",
  description: "Welcome to Mask HR",
};

export default function Home() {
  const technologies = [swift, android, react, angular, vue, python];

  const titleText = [
    { text: "Grow", color: "text-mainBlack" },
    { text: "Your Business With", color: "text-primary" },
    { text: "a team", color: "text-mainBlack" },
    { text: "That Cares", color: "text-primary" },
  ];

  const weHire = [
    {
      title: "Productivity Enhanced",
      bgImg: angular,
      subtitle:
        "Taking true ownership of your goals. It’s about caring about the outcome, not just delivering features mechanically. We aim to fulfill your vision, not just fill your eye.",
      cardType: "type1",
    },
    {
      title: "Superior Quality Assurance",
      bgImg: features2,
      subtitle:
        "Our agile process encourages tight collaboration and transparency. You'll know what to expect in every weekly release — no surprises.",
      cardType: "type2",
    },
    {
      title: "Accelerated Development Cycles",
      bgImg: features3,
      subtitle:
        "Our decade-long experience, skills, and approach allow us to confidently de-risk, build, and grow your digital products.",
      cardType: "type2",
    },
    {
      title: "Agile Development Process",
      bgImg: angular,
      subtitle:
        "We follow the lean startup framework to build products with relevant results. We’re laser-focused on reducing time to value while learning from real users on product scalability.",
      cardType: "type1",
    },
  ];

  const weInnovate = [
    {
      title: "Research & Discovery",
      subtitle: "Interested talents sign-up on Maskhr and creates profile",
    },
    {
      title: "Design & Build",
      subtitle:
        "Applicants skills and qualification will be evaluated by AI & Humans ",
    },
    {
      title: "Launch & Beyond",
      subtitle:
        "Upon passing the test, talents are activated onMaskhr and will be available for projects",
    },
  ];

  const techWeUse = [
    {
      icon: figma,
      title: "UI/UX Designers",
    },
    {
      icon: aws,
      title: "Data Entry",
    },
    {
      icon: callCenter,
      title: "Call Center Associates",
    },
    {
      icon: python,
      title: "Developers",
    },
    {
      icon: zendex,
      title: "Live chat/email support",
    },
    {
      icon: translators,
      title: "Translators",
    },
  ];

  const staffingInsight = [
    {
      title: "Find Verified Experts with Industry Level Experience",
      subtitle:
        "We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience.",
      btnLink: "/",
      btnText: "Read More",
      badge: "Blog",
    },
    {
      bgImg: "bg-features4",
      title: "Find Verified Experts with Industry Level Experience",
      subtitle:
        "We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience.",
      btnLink: "/",
      btnText: "Read More",
      badge: "Blog",
    },
    {
      bgImg: "bg-features4",
      title: "Find Verified Experts with Industry Level Experience",
      subtitle:
        "We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience.",
      btnLink: "/",
      btnText: "Read More",
      badge: "Blog",
    },
  ];

  const ourAdvantages = [
    {
      bgImg: "bg-darkGray",
      title: "Research & Discovery",
      subtitle: "Interested talents sign-up on Maskhr and creates profile",
    },
    {
      bgImg: "bg-darkGray",
      title: "Design & Build",
      subtitle:
        "Applicants skills and qualification will be evaluated by AI & Humans ",
    },
    {
      bgImg: "bg-darkGray",
      title: "Launch & Beyond",
      subtitle:
        "Upon passing the test, talents are activated onMaskhr and will be available for projects",
    },
  ];

  const ourAchievements = [
    {
      icon: maxwell,
      title: "Maxwell from Japan",
      subtitle:
        "“I am truly impressed by the professionalism of MaskHR. i landed my first job within 14 days of application and it has been a dream ever since”",
    },
    {
      icon: zendex,
      title: "Scott Tavarrez BD of ZenGo",
      subtitle:
        "“The MaskHR team has been amazing to work with. They helped us fill several key roles that we needed to add very quickly, and our customer support has never been better.”",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainHero
        title={titleText}
        titleSize="text-[60px]"
        btnLink1={"/"}
        btnText1="Find Talents"
        btnLink2={"/"}
        btnText2="Find Job"
        hasTech={true}
        technologies={technologies}
      />
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector1}
            badgeText={"Boosting Recruitment Process"}
            title={"The Future of Remote Hiring"}
            subtitle={
              "A convenient recruitment and staffing model that simultaneously empowers companies and careers."
            }
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
            {weHire.map((item, index) => (
              <div key={index} className="flex items-stretch">
                {" "}
                <HiringCard
                  title={item.title}
                  bgImg={item.bgImg}
                  subtitle={item.subtitle}
                  cardType={item.cardType}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector2}
            badgeText={"Our Concept to Recruiting"}
            title={"We Foster Innovation & Growth Turning Ideas to Dreams"}
            subtitle={
              "We help Forward-thinking companies design, build, launch, and evolve digital products and services. Our partnership goes beyond building products, we provide expert guidance for long lasting business value."
            }
          />
          <div className="grid md:grid-cols-3 gap-0">
            {weInnovate.map((item, index) => (
              <div key={index}>
                {" "}
                <ConceptCard
                  index={index + 1}
                  title={item.title}
                  subtitle={item.subtitle}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <DoublePageBorders>
        <SignUpForm />
      </DoublePageBorders>
      <PageBorders
        background={"bg-IntersectUp bg-cover bg-center bg-no-rerpeat"}
      >
        <div className="flex flex-col gap-4 md:gap-8">
          <LightPageStarter
            hasBadge={true}
            badgeIcon={vector3}
            badgeText={"Why MaskHR"}
            title={"The Advantages of MaskHR"}
            subtitle={
              "We work with Experience individuals whose talents we have carefully vetted and handpicked intoour talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience."
            }
          />

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {ourAdvantages.map((item, index) => (
              <div key={index}>
                {" "}
                <BenefitCard
                  bgImg={item.bgImg}
                  title={item.title}
                  subtitle={item.subtitle}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>{" "}
      <PageBorders
        background={"bg-IntersectDown bg-cover bg-center bg-no-rerpeat"}
        padding={null}
      >
        <div className="flex flex-col gap-4 md:gap-8 py-[10vh]">
          <LightPageStarter
            hasBadge={true}
            badgeIcon={vector4}
            badgeText={"Tools & Industry"}
            title={"Find Verified Experts with Industry Level Experience"}
            subtitle={
              "We work with experience individuals whose talents we have carefully vetted and handpicked intoour talent pool. This ensures we consistently deliver high end results with the right skillset working with best tools and industry experience."
            }
          />
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 px-[10px] ">
            {techWeUse.map((item, index) => (
              <div key={index}>
                {" "}
                <TechStack icon={item.icon} title={item.title} />{" "}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>{" "}
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector5}
            badgeText={"Blog"}
            title={"Stay Ahead with Staffing Insights"}
            subtitle={
              "Explore the latest trends, tips, and innovations in recruitments. Our blog offers expert insights to keep you at the forefront of recent openings.   "
            }
          />
          <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-4 md:gap-8">
            {staffingInsight.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "md:col-span-2 h-full"
                    : " md:col-span-1 flex h-full"
                }`}
              >
                {index === 0 ? (
                  // First custom black card
                  <div className="bg-mainBlack  flex flex-col p-[20px]  md:p-[30px] items-center xl:items-start justify-between rounded-[10px] md:rounded-[20px] shadow-custom-secondary h-full">
                    {" "}
                    <span className="text-primary font-semibold p-4 text-[14px]">
                      {item.badge}
                    </span>
                    <div className="flex flex-col space-y-4 p-[10px] md:mt-10 xl:mt-0">
                      <h1 className="text-[16px] leading-[20px] tracking-normal  md:text-[22px] lg:text-[32px] md:leading-[32px] text-white text-center xl:text-left  font-lato">
                        {item.title}
                      </h1>

                      <p className="text-[14px] leading-[20px] tracking-normal  md:text-[16px]  md:leading-[28px] text-white/60 text-center xl:text-left  font-lato">
                        {item.subtitle}
                      </p>

                      <Link href={item.btnLink}>
                        <button
                          className={`cursor-pointer font-normal rounded-[24px] font-lato bg-darkGray flex text-white w-full px-[20px] py-[10px] gap-2 text-[10px] leading-[10px] lg:text-[14px] lg:leading-[16px] items-center justify-center`}
                        >
                          {item.btnText}
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  // All other white cards
                  <div className="flex flex-col gap-4 h-full">
                    <div className="bg-white overflow-hidden flex flex-col justify-between rounded-[10px] md:rounded-[20px] shadow-custom-secondary h-full">
                      {/* Background image + badge */}
                      <div
                        className={`${item.bgImg}
                         bg-no-repeat bg-cover bg-center w-full h-[30vh] flex items-start`}
                      >
                        <span className="text-primary font-semibold p-4 text-[14px]">
                          {item.badge}
                        </span>
                      </div>

                      {/* Text content */}
                      <div className="flex flex-col space-y-4 p-[20px]  md:p-[30px]">
                        <MainText
                          text={item.title}
                          bold={true}
                          textLeft={true}
                          size={"text-[18px] "}
                        />
                        <MainText
                          text={item.subtitle}
                          color="text-secondary"
                          textLeft={true}
                        />

                        <Link href={item.btnLink}>
                          <button
                            className={`cursor-pointer font-normal rounded-[24px] font-lato bg-mainBlack flex text-white w-full px-[20px] py-[10px] gap-2 text-[10px] leading-[10px] lg:text-[14px] lg:leading-[16px] items-center justify-center`}
                          >
                            {item.btnText}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector5}
            badgeText={"Our Model"}
            title={"Our achievements"}
            subtitle={
              "Explore the latest trends, tips, and innovations in recruitments. Our blog offers expert insights to keep you at the forefront of recent openings.   "
            }
          />
          {/* card */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {ourAchievements.slice(0, 2).map((item, index) => (
              <div key={index}>
                {index === 0 ? (
                  // Card 1 structure
                  <div className="flex flex-col items-center justify-between gap-4 md:gap-8 rounded-[10px] md:rounded-[20px] shadow-custom-secondary p-[20px] md:p-[30px] bg-lightGray h-full">
                    <div className="flex gap-4 md:gap-8 items-center">
                      <ImageWrapper
                        src={item.icon}
                        alt={`Maskhr Achievements ${item.title}`}
                        width={80}
                        height={80}
                        style={"rounded-full bg-contain bg-no-repeat bg-center"}
                      />
                      <h1 className="text-[16px] leading-[20px] md:text-[18px]  md:leading-[32px] text-mainBlack text-center md:text-left font-lato">
                        {item.title}
                      </h1>
                    </div>
                    <MainText
                      text={item.subtitle}
                      color={"text-mainBlack/80"}
                    />
                  </div>
                ) : (
                  //  Card 2 structure
                  <div className="flex flex-col gap-4 md:gap-8 rounded-[10px] md:rounded-[20px] shadow-custom-secondary p-[20px] md:p-[30px] bg-primary h-full">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <ImageWrapper
                        src={item.icon}
                        alt={`Maskhr Achievements ${item.title}`}
                        width={80}
                        height={80}
                        style={" bg-contain bg-no-repeat bg-center"}
                      />
                      <h1 className="text-[16px] leading-[20px] md:text-[18px]  md:leading-[32px] text-white text-center xl:text-left font-lato">
                        {item.title}
                      </h1>
                    </div>
                    <MainText text={item.subtitle} color={"text-white/80"} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders padding={null}>
        <Verification titleColor={true} />{" "}
      </PageBorders>
      <DoublePageBorders
        background={"bg-mainBlack bg-cover bg-no-repeat bg-center"}
      >
        <div className="flex flex-col gap-4 md:gap-8 " id="contact">
          <LightPageStarter
            icon={LogoWhite}
            title={"Stay in touch"}
            subtitle={
              "Want to hear insights and inspirational stories from our team members from around the world? You know what to do."
            }
          />
          <div className="grid justify-items-center">
            <LoginForm />
          </div>
        </div>
      </DoublePageBorders>
    </div>
  );
}
