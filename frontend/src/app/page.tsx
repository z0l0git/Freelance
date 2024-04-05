import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { StickyImageLayout } from "@/components/StickyImage/LayOut";

import { Menu } from "@/components/Menu/Menu";
import { HeaderHero } from "@/components/HeaderHero";
import { Header } from "@/components/Header/HeaderComp";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { AboutUs } from "@/components/aboutUs/AboutUs";
import { StickyHome } from "@/components/StickyImage/StickyHome";
import { Footer } from "@/components/Footer/Footer";
import { HomePagePart } from "@/components/HomePagePart";
import { currentUser, auth } from "@clerk/nextjs";
import axios from "axios";

export default async function Home() {
  const { userId } = auth();
  const user: any = await currentUser();

  const getAllCategories = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/createByClerk", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user?.emailAddresses[0].emailAddress,
      });

      // console.log(user);
      // console.log(data);

      // const userId = data.existingUser._id;
      // console.log(userId, " user idded");
      // console.log(data, "token");
      // localStorage.setItem("Token", data);
      // typeof window !== "undefined" && sessionStorage.setItem("Token", data);
      // console.log("Token set successfully");

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const data = await getAllCategories();

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
