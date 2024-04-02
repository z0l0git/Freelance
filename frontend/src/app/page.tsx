import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";
import { currentUser } from "@clerk/nextjs";
import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";

export default async function Home() {
  const user = await currentUser();
  console.log(user, "user data");
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
