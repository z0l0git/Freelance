"use client";
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

export default function Home() {
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const result = await axios.get("http://localhost:3000/api");

        console.log(result.data?.user.emailAddresses[0].emailAddress, "result");

        const { data } = await axios.post(
          "http://localhost:8000/createByClerk",
          {
            firstName: result.data?.user.firstName,
            lastName: result.data?.user.lastName,
            email: result.data?.user.emailAddresses[0].emailAddress,
          }
        );

        console.log(data, "tokenpage");
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllCategories();
  }, []);

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
