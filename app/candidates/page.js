import MainHero from "@/components/hero/MainHero";
import TextLeftPageStarter from "@/components/section/TextLeftPageStarter";
import PageBorders from "@/components/Wrappers/PageBorders";
import react from "@/public/images/tech/React.png";
import angular from "@/public/images/tech/Angular.png";
import swift from "@/public/images/tech/Swift.png";
import python from "@/public/images/tech/Python.png";
import vue from "@/public/images/tech/vue.png";
import figma from "@/public/images/tech/figma2.png";
import boxfigma from "@/public/images/tech/Figma.png";
import callCenter from "@/public/images/tech/callCenter.png";
import aws from "@/public/images/tech/Aws.png";
import headphone from "@/public/images/tech/headphone.png";
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
  const technologies = [boxfigma, headphone, react, aws, callCenter, python];

  const titleText = [
    { text: "Mask it,", color: "text-mainBlack" },
    { text: "Find Flexible", color: "text-primary" },
    { text: "Opportunities", color: "text-mainBlack" },
    { text: "With", color: "text-mainBlack" },

    { text: "Growth", color: "text-primary" },
    { text: "Potential", color: "mainBlack" },
  ];

  const weHire = [
    {
      title: "Earn More",
      bgImg: angular,
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      cardType: "type1",
    },
    {
      title: "Find Remote Roles",
      bgImg: features2,
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      cardType: "type2",
    },
    {
      title: "We Focus On Growth",
      bgImg: features3,
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",

      cardType: "type2",
    },
    {
      title: "Continuous Mentoring ",
      bgImg: angular,
      subtitle:
        "Most companies are already working remotely in some capacity, making it easy to add MaskHR team members. The team members are hired and paid by us, but work like any other remote hire would at your company via a staff augmentation model.",
      cardType: "type1",
    },
  ];

  const weInnovate = [
    {
      title: "Apply",
      subtitle: "Interested talents sign-up onMaskhr and creates profile",
    },
    {
      title: "Prepare",
      subtitle:
        "Applicants skills and qualification will be evaluated by AI & Humans ",
    },
    {
      title: "Interview",
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
      subtitle: "Find Verified Experts with Industry Level Experience",
      badge: "Old-school ways",
      badgeColor: "bg-lightGray text-mainBlack",
      bgColor: "bg-secondary text-mainBlack",
    },
    {
      subtitle: "Find Verified Experts with Industry Level Experience",
      badge: "The New Way",
      badgeColor: "bg-primary text-white",
      bgColor: "bg-mainBlack text-white",
    },
  ];

  const ourAdvantages = [
    {
      bgImg: "bg-darkGray",
      title: "Technology / Software",
      subtitle:
        "We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently ",
    },

    {
      bgImg: "bg-darkGray",
      title: "Insurance / Healthcare",
      subtitle:
        "We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently ",
    },

    {
      bgImg: "bg-darkGray",
      title: "Direct sales Organisations",
      subtitle:
        "We work with Experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently ",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MainHero
        title={titleText}
        subtitle={
          "We'll connect you with a life-changing work opportunity and career path."
        }
        titleSize="text-[50px] leading-[50px]"
        btnText1="Find Job"
        hasTech={true}
        technologies={technologies}
      />
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector1}
            badgeText={"Boosting Recruitment Process"}
            title={"Revolutionizing Remote Work for Maximum Growth"}
            subtitle={
              "Learn new skills, find compactible roles with growth opportunities. Our jobs provides great flexibility forall available opening. "
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
            badgeText={"Connecting talents to teams"}
            title={"How it Works"}
            subtitle={
              "We work with Experience individuals whose talents we have carefully vetted and handpicked intoour talent pool. This ensures we consistently deliver high end results."
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

      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <PageStarter
            hasBadge={true}
            badgeIcon={vector5}
            badgeText={"Our Model"}
            title={"Staffing the New Way"}
            subtitle={
              "Explore the latest trends, tips, and innovations in recruitments. Our blog offers expert insights to keep you at the forefront of recent openings.   "
            }
          />
          <div className="grid md:grid-cols-2   gap-4 md:gap-8">
            {staffingInsight.map((item, index) => (
              <div key={index}>
                {" "}
                <div className="flex flex-col gap-4 md:gap-8  items-center">
                  <span
                    className={`${item.badgeColor} font-semibold px-[20px]  py-[15px] text-[14px]  rounded-[24px] shadow-custom-secondary w-fit`}
                  >
                    {item.badge}
                  </span>
                  <div
                    className={`${item.bgColor} flex flex-col p-[20px]  md:p-[30px] items-center  justify-center rounded-[10px] md:rounded-[20px] shadow-custom-secondary min-h-[40vh]`}
                  >
                    <p className="text-[18px] leading-[20px] tracking-normal  md:text-[22px]  md:leading-[28px]  font-semibold text-center  md:text-left  font-lato">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      <PageBorders padding={null}>
        <Verification />{" "}
      </PageBorders>
      <DoublePageBorders
        background={"bg-mainBlack bg-cover bg-no-repeat bg-center"}
      >
        <div className="flex flex-col gap-4 md:gap-8 " id="schedule">
          <LightPageStarter
            icon={LogoWhite}
            title={"Apply for a position at MaskHR"}
            subtitle={
              "Fill out our application form to be considered for remote workopportunities"
            }
          />
          <div className="grid justify-items-center">
            <Link href={"/"}>
              <MainButton
                text={"Get Started"}
                hasIcon={true}
                bgcolor={"bg-darkGray"}
              />
            </Link>{" "}
          </div>
        </div>
      </DoublePageBorders>
    </div>
  );
}
