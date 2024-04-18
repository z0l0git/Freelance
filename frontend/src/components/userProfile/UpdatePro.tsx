"use client";
import Image from "next/image";
import { InputUserProfile } from "./imputUserProfile";
import { ChangeEvent, useEffect } from "react";
import axios from "axios";
import Button from "./HoverButton";
import { useState } from "react";
import { BiSolidCommentEdit } from "react-icons/bi";
import Example from "./HoverButton";
type SetProDileype = {
  firstName: string;
  lastName: string;
  id: string;
  phone: string;
  location: string;
  createdAt: string;
  image: string;
};
type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  discription: string;
  location: string;
  image: string;
};

type TypePropsstate = {
  profile: SetProDileype;
  setProfile: React.Dispatch<
    React.SetStateAction<{
      id: string;
      firstName: string;
      lastName: string;
      phone: string;
      location: string;
      createdAt: string;
      image: string;
    }>
  >;
  data: Response;
};

const getPresignedURL = async () => {
  const { data } = await axios.get("https://freelance-gmjr.onrender.com/uploadImage");
  return data as { uploadUrl: string; accessUrls: string };
};

export const UpdatePro = (props: TypePropsstate) => {
  const { profile, setProfile, data } = props;
  console.log(profile, "pro");
  console.log(data, "data");

  const [disabled, setDisabled] = useState(false);
  console.log(disabled, "disabled");

  const [image, setImage] = useState<FileList | null>(null);
  const [accessUrl, setAccessUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChooseFile = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files);
  };
  console.log(image, "imagee");

  useEffect(() => {
    if (accessUrl) {
      setProfile((prevn) => ({
        ...prevn,
        image: accessUrl,
      }));
    }
  }, [accessUrl]);

  const uploadImage = async () => {
    if (image) {
      setLoading(true);
      const img = image[0] as File;
      const { uploadUrl, accessUrls } = await getPresignedURL();

      await axios.put(uploadUrl, img, {
        headers: {
          "Content-Type": img.type,
        },
      });

      setAccessUrl(accessUrls);
      setLoading(false);
    }
  };

  const handlehange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const deleteImage = () => {
    setProfile((prevn) => ({
      ...prevn,
      image: "/proq.webp",
    }));
  };

  const HandlerClick = async () => {
    try {
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/upUserSJ",
        profile
      );
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // if (
  //   profile?.firstName !== data?.firstName ||
  //   profile?.lastName !== data?.lastName ||
  //   profile?.image !== data?.image ||
  //   profile?.phone !== data?.phone ||
  //   profile?.location !== data?.location
  // ) {
  //   // setDisabled(true);
  //   console.log("true");
  // } else {
  //   console.log("fale");
  // }

  return (
    <div>
      <div className="flex flex-col  justify-start p-[32px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  gap-[30px]">

        <div className="flex items-center gap-[60px] w-100%  font-semibold text-[22px] mt-[30px]">
          <div>Profile Photo</div>
          <div className="flex  items-center justify-center  gap-[50px] ">
            <label
              className="flex flex-col w-[150px] h-[150px] relative border border-gray-300 rounded-full p-3 bg-[#f8f9fc] items-center justify-center cursor-pointer"
              htmlFor="file-upload"
            >
              <Image
                alt=""
                src={`${profile?.image}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <input id="file-upload" type="file" onChange={handleChooseFile} />
              <BiSolidCommentEdit className="absolute z-30 top-[-4px] text-[30px] right-[15px]" />
            </label>

            <div onClick={uploadImage}>{loading ? "Loading" : "Submit"} </div>
            <div
              onClick={deleteImage}
              className="cursor-pointer active:scale-[0.95] hover:scale-[1.05]"
            >
              Delete photo
            </div>
          </div>
        </div>
        <div className="flex w-[100%] gap-[30px] mt-[20px]">
          <div className="w-[50%] ">
            <div className="font-semibold text-[22px] mb-[20px] ">
              FirstName:
            </div>
            <InputUserProfile
              name="firstName"
              placeHolder="First Name"
              value={profile.firstName}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
          <div className="w-[50%]">
            <div className="font-semibold text-[22px] mb-[20px] ">
              LastName:
            </div>
            <InputUserProfile
              name="lastName"
              placeHolder="Last Name"
              value={profile.lastName}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
        </div>
        <div className="flex w-[100%] gap-[30px] mt-[20px]">
          <div className="w-[50%] ">
            <div className="font-semibold text-[22px] mb-[20px] ">
              Location:
            </div>
            <InputUserProfile
              name="location"
              placeHolder="add your location"
              value={profile.location}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
          <div className="w-[50%]">
            <div className="font-semibold text-[22px] mb-[20px] ">Phone:</div>
            <InputUserProfile
              name="phone"
              placeHolder="add your phone number"
              value={profile.phone}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
        </div>
        <div
          onClick={HandlerClick}
          className="cursor-pointer w-fit active:scale-[0.95] hover:scale-[1.05] px-[10px] py-[5px] bg-green-800 rounded-lg text-white font-bold"
        >
          save changes
          {/* <Example onclick={HandlerClick} /> */}
        </div>
      </div>
      {/* <div className="flex flex-col  justify-start p-[28px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  mt-[32px]">
        <div className="font-semibold text-[38px] mb-[20px]">Address</div>
        <div className="w-[100%] ">
          <div className="font-semibold text-[22px] mb-[20px] ">Location:</div>
          <InputUserProfile name="firstName" />
        </div>
      </div> */}
      <div className="flex flex-col  justify-start p-[28px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  mt-[32px]">
        <div className="font-semibold text-[38px] mb-[20px]">
          Delete Account
        </div>
        <div>
          When you delete your account, you lose access to Front account
          services, and we permanently delete your personal data. You can cancel
          the deletion for 14 days.
        </div>
        <div className="mt-[20px] text-[24px] font-semibold">Delete</div>
      </div>
    </div>
  );
};
