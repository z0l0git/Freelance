"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { IoIosCheckmarkCircle, IoMdNotificationsOutline } from "react-icons/io";
import { LiaUserCheckSolid } from "react-icons/lia";
import {
  MdPayment,
  MdChatBubbleOutline,
  MdOutlinePostAdd,
} from "react-icons/md";
import { AiOutlineSetting, AiOutlineTeam } from "react-icons/ai";
export const MenuProfileCard = (props: any) => {
  const { profilePicture, userName, userMail } = props;
  return (
    <div className="flex justify-center items-center rounded-full border bg-white w-10 h-10 ">
      <DropdownMenuTrigger>
        <Image alt="user picture" src={profilePicture} width={60} height={60} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 py-3 px-6">
        <DropdownMenuLabel className="flex flex-col justify-center items-center gap-5">
          <MenuProfileUserInfoCard />
          <div>Button</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <p className="text-sm text-gray-600 font-thin">Account</p>
        </DropdownMenuLabel>
        <DropdownMenuItem className=" flex gap-2 w-full h-8">
          <LiaUserCheckSolid />
          <span className="font-bold ">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 w-full h-8">
          <IoMdNotificationsOutline />
          <span className="font-bold ">Notifications</span>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 w-full h-8">
          <MdChatBubbleOutline />
          <span className="font-bold ">Post A Request</span>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 w-full h-8">
          <MdOutlinePostAdd />
          <span className="font-bold ">Post A Request</span>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 w-full h-8">
          <AiOutlineTeam /> <span className="font-bold ">Refer a Friend</span>
        </DropdownMenuItem>
        <DropdownMenuLabel>
          <p className="text-sm text-gray-600 font-thin">Billing</p>
        </DropdownMenuLabel>
        <DropdownMenuItem className="flex gap-2 w-full h-8">
          <AiOutlineSetting /> <span className="font-bold ">Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 w-full h-8">
          <MdPayment /> <span className="font-bold ">Payment</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </div>
  );
};

export const MenuProfileUserInfoCard = (props: any) => {
  const { userName, userMail } = props;
  return (
    <div className="w-[242px] h-16 flex gap-2 items-center">
      <div className="w-16 h-16 flex justify-center items-center rounded-full border p-2 relative">
        <Image src="/f10.png" width={62} height={62} alt="user Profile" />
        <IoIosCheckmarkCircle className="absolute bottom-0 right-0  text-green-600" />
      </div>
      <div>
        <div className="text-lg">{userName}Ner</div>
        <div className="text-md">{userMail} Mail</div>
      </div>
    </div>
  );
};
