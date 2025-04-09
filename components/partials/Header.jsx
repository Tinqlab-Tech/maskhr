"use client";

import Link from "next/link";
import ImageWrapper from "../Wrappers/ImageWrapper";
import logo from "@/public/images/logo.png";
import usicon from "@/public/images/usicon.png";
import NavItem from "../typography/NavItem";
import MobileNav from "./MobileNav";
import { ContactUsModal } from "../forms/ContactUsModal";
import HomepageHero from "../hero/HomepageHero";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./../language-switcher";

export default function Header() {
  // const t = useTranslations("Menu");
  const pathname = usePathname();

  return (
    <header className="bg-hero bg-cover bg-no-repeat  ">
      <div className="flex justify-between items-center sticky top-0 z-50 bg-black/50 py-[20px] px-[20px] lg:px-[80px]  md:px-[40px] ">
        {" "}
        <Link href={"/"}>
          <ImageWrapper
            src={logo}
            width={140}
            height={80}
            alt={"Earthorex logo"}
            style={"darks:hidden"}
          />
        </Link>
        <div className="flex items-center justify-end gap-2 md:gap-2 lg:gap-8">
          <div className=" hidden md:flex items-center justify-end gap-2 md:gap-8 ">
            <div className="flex gap-1 items-center justify-start">
              {" "}
              {/* <ImageWrapper
                src={usicon}
                width={20}
                height={20}
                alt={"United states flag"}
                style={""}
              />
              <NavItem text={"EN"} /> */}
              <LanguageSwitcher />
            </div>
            <Link href={"/#about"}>
              {" "}
              <NavItem text={"About Us"} />
            </Link>
            <Link href={"/#services"}>
              {" "}
              <NavItem text={"Our Services"} />
            </Link>

            <ContactUsModal btnText={"Contact Us"} />
          </div>
          <div className="flex gap-4 justify-end items-center md:hidden">
            <div className="">
              <div className="flex gap-1 items-center justify-start">
                {" "}
                <LanguageSwitcher />
              </div>
            </div>

            <MobileNav />
          </div>
        </div>
      </div>
      {pathname === "/" ? (
        <div className="flex justify-center items-center bg-black/50 ">
          <HomepageHero />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
