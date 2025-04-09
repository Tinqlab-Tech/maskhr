import Link from "next/link";
import SocialMediaItem from "../section/SocialMediaItem";
import ImageWrapper from "../Wrappers/ImageWrapper";
import logo from "@/public/images/logo2.png";
import FooterTitle from "@/components/typography/FooterTitle";
import NormalText from "@/components/typography/NormalText";
import LightText from "../typography/LightText";
import ConsentNav from "./ConsentNav";

export default function Footer() {
  // const t = useTranslations("Footer");

  return (
    <div className=" xxl:px-[200px] mt-[20px] darks:border-none bg-white px-[10px] md:px-[40px] font-Gilroy lg:px-[80px]">
      <div className="">
        <div className=" md:pb-[6px]">
          <div className=" grid grid-cols-2 gap-4 md:gap-3 px-[10px] py-[40px] lg:py-[60px] md:mb-[20px] md:grid-cols-4 md:divide-none ">
            <div className="md:m-0 mb-2 md:mb-0 col-span-2">
              <div className="flex items-start justify-start">
                <ImageWrapper
                  src={logo}
                  width={140}
                  height={80}
                  alt={"Earthorex Logo"}
                />
              </div>
            </div>
            <div className="md:m-0">
              <FooterTitle text={"Useful links"} />
              <div className="mt-[10px] grid grid-cols-1 gap-2 md:gap-4 lg:gap-2 text-[12px] font-normal leading-[24px] text-mainBlack md:mt-[20px]  md:leading-[40px] lg:w-1/2 ">
                <Link href="/#about">
                  <NormalText text="About Us" color={"text-mainBlack"} />
                </Link>
                <Link href="/#services">
                  <NormalText text="Our Services" color={"text-mainBlack"} />
                </Link>
              </div>
            </div>
            <div className="md:m-0">
              <FooterTitle text={"Contact Us"} />
              <div className="mt-[10px] grid grid-cols-1 gap-2 md:gap-4 lg:gap-2 text-[12px] font-normal leading-[24px] text-mainBlack md:mt-[20px]  md:leading-[40px] ">
                {/* <NormalText
                  text={`Wilmington, DE 19803`}
                  color={"text-mainBlack"}
                />{" "}
                <NormalText
                  text={`United States of America.`}
                  color={"text-mainBlack"}
                />{" "} */}
                <Link href={"mailto:info@Earthorex.com"}>
                  <NormalText
                    text="info@Earthorex.com"
                    color={"text-mainBlack"}
                  />
                </Link>
                <NormalText text="+1 302 383 0456" color={"text-mainBlack"} />
              </div>
            </div>
            {/* <div className="md:m-0">
              <FooterTitle text={"Legal"} />
              <div className=" mt-[10px] grid grid-cols-1 gap-2 md:gap-4 lg:gap-2 text-[12px] font-normal leading-[24px] text-mainBlack md:mt-[20px] md:leading-[40px] ">
                <ConsentNav />
                <Link href="/code-of-ethics">
                  <NormalText text="Code Of Ethics" color={"text-mainBlack"} />
                </Link>
                <Link href="/cookie-policy">
                  <NormalText text="Cookie Policy" color={"text-mainBlack"} />
                </Link>
              </div>
            </div> 
            */}
          </div>
          <div className="flex justify-center md:justify-start items-center gap-4 md:gap-8 pb-[20px]">
            {" "}
            <ConsentNav />
            {/* <Link href="/code-of-ethics">
              <NormalText text="Code Of Ethics" color={"text-mainBlack"} />
            </Link> */}
            <Link href="/cookie-policy">
              <NormalText text="Cookie Policy" color={"text-mainBlack"} />
            </Link>
          </div>
          <hr className="border-[.2px] border-[#C4C4C4] border-opacity-30"></hr>
          <div className="px-[10px] md:pb-[20px] lg:px-[10px]">
            <div>
              <div className="md:item-start justify-items-center grid grid-cols-1 justify-between py-[20px] text-left text-[10px] font-normal leading-[10px] md:flex md:pb-0 md:text-[14px] md:leading-[14px]">
                <section className="order-2 flex items-center justify-center pt-[20px] text-center  md:justify-start md:pt-0 md:text-left lg:text-right">
                  <p
                    className={`text-[8px] font-light leading-[10px] md:text-[12px] md:leading-[16px] text-mainBlack`}
                  >
                    {`© ${new Date().getFullYear()} Earthorex, an EHD Group Company All rights reserved`}
                  </p>
                </section>
                <div className="order-1">
                  {/* <div className="items-center justify-end  text-center md:gap-4 hover:text-primary cursor-pointer">
                    <SocialMediaItem />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
