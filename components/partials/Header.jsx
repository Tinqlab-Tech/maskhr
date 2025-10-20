"use client";

import Link from "next/link";
import ImageWrapper from "../Wrappers/ImageWrapper";
import logo from "@/public/images/logo.png";
import NavItem from "../typography/NavItem";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./../language-switcher";
import { MainButton } from "../button/MainButton";

export default function Header() {
  // const t = useTranslations("Menu");
  const pathname = usePathname();

  const navigations = [
    { path: "/", title: "Why MaskHR?" },
    { path: "/company", title: "For Company" },
    { path: "/candidates", title: "For Candidates" },
  ];

  return (
    <header className="bg-herobg bg-cover bg-no-repeat  ">
      <div className="flex justify-between items-center gap-4 sticky  py-[4vh] px-[6vw] ">
        {" "}
        <Link href={"/"}>
          <ImageWrapper src={logo} width={140} height={80} alt={"Mask Hr"} />
        </Link>
        <div className=" hidden lg:flex items-center  gap-4 md:gap-8 ">
          {navigations.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link key={index} href={item.path}>
                <NavItem
                  text={item.title}
                  textColor={`${
                    isActive
                      ? "text-mainBlack"
                      : "text-mainBlack/50 hover:text-mainBlack  hover:font-semibold"
                  }`}
                />
              </Link>
            );
          })}{" "}
        </div>
        <div className="flex gap-4 md:gap-8 items-center">
          <LanguageSwitcher />
          <MainButton text={"Start Hiring"} hasIcon={true} />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
