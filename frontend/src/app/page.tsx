import Image from "next/image";
import React from "react";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";

import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";
import { Header } from "@/components/Header/HeaderComp";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { AboutUs } from "@/components/aboutUs/AboutUs";
import { StickyHome } from "@/components/StickyImage/StickyHome";
import { Footer } from "@/components/Footer/Footer";
import { HomePagePart } from "@/components/HomePagePart";

export default async function Home() {
  // const user: any = await currentUser();
  // console.log(user?.emailAddresses[0].emailAddress, "user data");

  return (
    <div className="flex flex-col gap-[40px]">
      <HeaderHero />
      <AboutUs />
      <StickyHome />
      <HomePagePart />
      <Footer />
    </div>
  );
}
