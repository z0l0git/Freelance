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
import { AuroraHero } from "@/components/Header/StarsHeader";

let url: string = process.env.NEXT_PUBLIC_PRODUCTION!;

export default function Home() {
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const result = await axios.get(url);

        const { data } = await axios.post(
          "https://freelance-gmjr.onrender.com/createByClerk",
          {
            firstName: result.data?.user.firstName,
            lastName: result.data?.user.lastName,
            email: result.data?.user.emailAddresses[0].emailAddress,
          }
        );

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
    <div className="scrollbar-hide">
      <HeaderHero />
      <AboutUs />
      <HomePagePart />
      <Footer />
    </div>
  );
}
