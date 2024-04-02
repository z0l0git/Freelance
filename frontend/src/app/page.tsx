import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";

import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";
import { Header } from "@/components/Header/HeaderComp";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";

export default function Home() {
  return (
    <div className="">
      <div className="relative z-30 bg-[url(https://res.cloudinary.com/dxarul6xr/image/upload/v1711501249/mknv2r8z1g8zp3ig9odn.jpg)] bg-cover"></div>
      <HeaderHero />
      <div className="">
        <StickyImageLayout />
        <div className="w-screen h-[900px]  "></div>
      </div>
    </div>
  );
}
