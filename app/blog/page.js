import BlogCard from "@/components/card/BlogCard";
import LoginForm from "@/components/form/LoginForm";
import OtherPageHero from "@/components/hero/OtherPageHero";
import LightPageStarter from "@/components/section/LightPageStarter";
import { HeaderOne } from "@/components/typography/HeaderOne";
import MainText from "@/components/typography/MainText";
import DoublePageBorders from "@/components/Wrappers/DoublePageBorders";
import PageBorders from "@/components/Wrappers/PageBorders";
import Link from "next/link";
import LogoWhite from "@/public/images/logoWhite.png";
import PaginationButton from "@/components/button/PaginationButton";
import features5 from "@/public/images/featuresbg/features5.png";

export const metadata = {
  title: "Mask HR",
  description: "Welcome to Mask HR",
};

export default function Home() {
  const ourFeaturedBlog = [
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
  ];

  const ourBlogPost = [
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
    {
      heading: "HR INSIGHTS . 10 MIN",
      bgImg: features5,
      title: "Building a world-class hiring service team with MaskHR",
      subtitle:
        "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ",
      btnLink: "/",
      btnText: "Read Now >",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          title={"MaskHR Blog"}
          subtitle={
            "Expertise at your fingertips. Access our Insights on remote hiring and more"
          }
        />
        <PageBorders>
          <div className="flex flex-col gap-4 md:gap-8 ">
            <HeaderOne text={"Featured Blog Post"} textLeft={true} />
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {/* image */}
              <div className="bg-features5 bg-cover bg-top bg-no-repeat h-[40vh] md:h-full rounded-[30px]" />
              {/* text */}
              <div className="flex flex-col gap-4 md:gap-8 p-[30px]">
                <MainText
                  text={"HR INSIGHTS . 10 MIN"}
                  textLeft={true}
                  bold={true}
                />
                <HeaderOne
                  text={
                    "Building a world-class hiring service team with MaskHR"
                  }
                  size={" font-semibold"}
                  textLeft={true}
                />
                <p className="flex text-[8px]  leading-[10px] md:text-[16px] md:leading-[16px] justify-center md:justify-start text-mainBlack ">
                  {`Jan 17, ${new Date().getFullYear()}  `}
                </p>
                <MainText
                  text={
                    "Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  "
                  }
                  color="text-secondary"
                  textLeft={true}
                />

                {/* button */}
                <Link href={"/"}>
                  <button
                    className={`cursor-pointer font-normal rounded-[24px]   font-lato  flex text-primary w-full  gap-2 text-[10px] leading-[10px] lg:text-[14px] lg:leading-[16px] items-center md:justify-start justify-center   `}
                  >
                    {"Read Now >"}
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {ourFeaturedBlog.map((item, index) => (
                <div key={index}>
                  <BlogCard
                    heading={item.heading}
                    bgImg={item.bgImg}
                    title={item.title}
                    subtitle={item.subtitle}
                    btnLink={item.btnLink}
                    btnText={item.btnText}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <DoublePageBorders
          background={"bg-mainBlack bg-cover bg-no-repeat bg-center"}
        >
          <div className="flex flex-col gap-4 md:gap-8 " id="FAQs">
            <LightPageStarter
              icon={LogoWhite}
              title={"Join US! Upcoming MaskHR Webminars"}
              subtitle={
                "Whether you're looking for expert advice from HR leaders or ideas for upleveling your workplace, MaskHR's webinars have you covered."
              }
            />
            <div className="grid justify-items-center">
              <LoginForm btnText={"Register Now"} />
            </div>
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div className="flex flex-col gap-4 md:gap-8">
            <HeaderOne text={"All Blog Post"} textLeft={true} />
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {ourBlogPost.map((item, index) => (
                <div key={index}>
                  <BlogCard
                    heading={item.heading}
                    bgImg={item.bgImg}
                    title={item.title}
                    subtitle={item.subtitle}
                    btnLink={item.btnLink}
                    btnText={item.btnText}
                  />
                </div>
              ))}
            </div>

            <PaginationButton />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
