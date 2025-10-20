import Link from "next/link";
import SocialMediaItem from "../section/SocialMediaItem";
import ImageWrapper from "../Wrappers/ImageWrapper";
import logo from "@/public/images/logo.png";
import FooterTitle from "@/components/typography/FooterTitle";
import NormalText from "@/components/typography/NormalText";
import ConsentNav from "./ConsentNav";
import MainText from "../typography/MainText";
import PageBorders from "../Wrappers/PageBorders";

export default function Footer() {
  const routeItems = [
    {
      title: "Company",
      items: [
        { path: "/candidates", subtitle: "Careers" },
        { path: "/about", subtitle: "About" },
        { path: "/company", subtitle: "Services" },
        { path: "/blog", subtitle: "Blog" },
      ],
    },

    {
      title: "Support",
      items: [
        { path: "/#contact", subtitle: "Contact us" },
        { path: "/#schedule", subtitle: "Schedule demo" },
        { path: "/#support", subtitle: "Support" },
        { path: "/#FAQs", subtitle: "FAQs" },
      ],
    },

    {
      title: "info",
      items: [
        { path: "/cookie-policy", subtitle: "Terms of use" },
        { path: "/cookie-policy", subtitle: "License" },
        { path: "/cookie-policy", subtitle: "Privacy Policy" },
        { path: "/cookie-policy", subtitle: "Privacy" },
      ],
    },
  ];

  return (
    <footer className="">
      <PageBorders>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8  ">
          {/* --- Logo --- */}
          <div className="">
            <div className="flex flex-col gap-4  items-start justify-between md:w-3/5">
              <ImageWrapper
                src={logo}
                width={140}
                height={80}
                alt="MaskHr Logo"
              />
              <MainText
                text={
                  "We work with experience individuals whose talents we have carefully vetted and handpicked into our talent pool. This ensures we consistently deliver high end results with the right skillset and industry experience."
                }
                color={"text-secondary"}
                textLeft={true}
              />
            </div>
          </div>

          {/* --- Useful Links --- */}
          <div className="grid grid-cols-3 gap-6 w-full">
            {routeItems.map((section, i) => (
              <div key={i} className="flex flex-col gap-4">
                <FooterTitle text={section.title} textLeft={true} />
                <div className="flex flex-col gap-2">
                  {section.items.map((item, index) => (
                    <Link key={index} href={item.path}>
                      <MainText
                        text={item.subtitle}
                        textLeft={true}
                        color={"text-secondary"}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1">
          <div className="items-center justify-end text-center md:gap-4 hover:text-primary cursor-pointer">
            <SocialMediaItem />
          </div>
        </div>

        {/* <hr className="border-[.2px] border-secondary border-opacity-30" /> */}
      </PageBorders>{" "}
      {/* --- Bottom Section --- */}
      <section className="w-full py-4 pl-[8vh] flex gap-4 md:gap-8 bg-lightGray order-2  items-center justify-center text-center md:justify-start  md:text-left lg:text-right">
        <p className=" text-[8px]  leading-[10px] md:text-[16px] md:leading-[16px] text-mainBlack font-bold">
          {`© ${new Date().getFullYear()} - TinqLab`}
        </p>
        <p className="text-[8px]  leading-[10px] md:text-[14px] md:leading-[16px] text-secondary font-semibold">
          {"Info@tinqlab.com"}
        </p>{" "}
        <p className="text-[8px]  leading-[10px] md:text-[14px] md:leading-[16px] text-secondary font-semibold">
          {"Maintained with love by TinqLab"}
        </p>
      </section>
    </footer>
  );
}
