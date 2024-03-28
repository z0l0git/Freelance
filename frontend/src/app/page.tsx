
import Image from "next/image";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";
export default function Home() {
  return (
    <div className="">
      <div className="w-screen h-[3000px] relative z-30 bg-white"></div>
      <div>
        <StickyImageLayout />
        <div className="w-screen h-[1300px]  "></div>
      </div>

      <div className="w-screen  h-[3000px] z-30 flex bg-slate-500 relative"></div>

