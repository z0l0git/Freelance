import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";
import { currentUser } from "@clerk/nextjs";
import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";
import { Header } from "@/components/Header/HeaderComp";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";

export default async function Home() {
  const user = await currentUser();
  console.log(user, "user data");
  return (
    <div className=" bg-cover">
      <HeaderHero />
    </div>
  );
}
