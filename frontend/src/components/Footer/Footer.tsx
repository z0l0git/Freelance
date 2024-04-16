import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsCursor } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { PiPinterestLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/footer/footerbg1.jpg)] mt-[30px]">
      <div className="w-screen  flex justify-center flex-wrap ">
        <div className="px-3 w-[336px] mt-[24px]">
          <div>
            <div className="pb-6">
              <Image alt="logo" src="/logo.png " width={186} height={49} />
            </div>

            <div className="text-white pb-[30px]">
              Join our community of businesses,
              <br />
              entrepreneurs, and freelancers
            </div>
            <div className="flex gap-[12px]">
              <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
                <FaFacebook className="w-4 h-4 text-white" />
              </div>
              <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
                <FaTwitter className="w-4 h-4 text-white" />
              </div>
              <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
                <PiPinterestLogoFill className="w-4 h-4 text-white" />
              </div>
              <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
                <FaInstagram className="w-4 h-4 text-white" />
              </div>
              <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
                <FaSkype className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="px-3 text-white w-[336px] l:w-[220px] mt-[24px] x:w-[190px] m:w-[160px]">
          <div className="font-semibold text-white text-[24px] pb-[24px]">
            Quick Link
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="cursor-pointer font-semibold">About us</div>
            <div className="cursor-pointer font-semibold">Browse Job</div>
            <div className="cursor-pointer font-semibold">Find Talent</div>
            <div className="cursor-pointer font-semibold">FAQs</div>
            <div className="cursor-pointer font-semibold">Blog</div>
          </div>
        </div>
        <div className="text-white px-3 w-[336px] mt-[24px]">
          <div className="font-semibold text-white text-[24px] pb-[24px]">
            Contact
          </div>
          <div className="flex items-center gap-3 pb-[16px]">
            <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
              <BsFillTelephonePlusFill className="w-4 h-4 text-white" />
            </div>
            (976) 8811-1188
          </div>
          <div className="flex items-center gap-3 pb-[16px]">
            <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
              <FaEnvelopeOpen className="w-4 h-4 text-white" />
            </div>
            freelancer01.devs@gmail.com
          </div>
          <div className="flex items-center gap-3 pb-[16px]">
            <div className="border rounded-[50px] w-[36px] h-[36px] border-blue-700 flex justify-center items-center">
              <FaLocationDot className="w-4 h-4 text-white" />
            </div>
            Mongolia, Ulaanbaatar, 12345
          </div>
        </div>
        {/* <div className="px-3 w-[336px] mt-[24px]">
          <div className="font-semibold text-white text-[24px] pb-[24px]">
            Newsletter
          </div>
          <div className="text-white pb-[24px]">
            Subscribe our newsletter to get our <br />
            latest update news
          </div>
          <div className="border border-blue-700 w- items-center flex rounded-full p-[8px] w-[306px]">
            <input
              className="border-none items-center flex p-[8px] w-[201px] h-[52px] bg-transparent pl-[10px] text-white outline-none"
              placeholder="Email address"
            />
            <div className="bg-blue-700 px-[31px] py-[15px] rounded-3xl ">
              <BsCursor className="text-white w-5 h-5" />
            </div>
          </div>
        </div> */}
      </div>
      <hr className="" />
      <div className="flex flex-col md:flex-row items-center text-white py-[20px] justify-around w-full gap-[20px] ">
        <div className="flex ">
          <div>Copyright © 2024</div>
          <div className="text-[#2196F3]"></div>

          <div className="text-[#FFBE57]"></div>
        </div>
        <div className="flex gap-[20px] items-center justify-center">
          <div className="cursor-pointer">Help & Support</div>
          <div className="cursor-pointer">Privacy policy</div>
          <div className="cursor-pointer">Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};
