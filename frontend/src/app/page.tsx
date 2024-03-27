import { HeaderHero } from "@/components/HeaderHero";
import { Header } from "@/components/Header/HeaderComp";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <HeaderHero />
    </div>
  );
}
