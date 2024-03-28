import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";
import { Input } from "@/components/Input";
export default function Home() {
  return (
    <div className="">
      <div className="relative z-30 ">
        <Input />
      </div>
      <div className="w-screen h-[3000px] relative z-30 bg-white"></div>
      <div>
        <StickyImageLayout />
        <div className="w-screen h-[1300px]  "></div>
      </div>
      <div className="w-screen  h-[3000px] z-30 flex bg-slate-500 relative"></div>
    </div>
  );
}
