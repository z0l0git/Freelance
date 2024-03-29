import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";

import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";

export default function Home() {
  return (
    <div className="">
      <div className="relative z-30 ">
        <Menu />
      </div>

      <HeaderHero />

      <div className="">
        <StickyImageLayout />
        <div className="w-screen h-[900px]  "></div>
      </div>

    </div>
  );
}
