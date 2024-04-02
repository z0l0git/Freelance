import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";

import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";
import { Header } from "@/components/Header/HeaderComp";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";

type Props = { title: string; description: string; image: string };
export default function Home(props?: Props) {
  return (
    <div className=" bg-cover">
      <HeaderHero />
    </div>
  );
}
