"use client";
import Image from "next/image";
import { InputUserProfile } from "./imputUserProfile";
import { ChangeEvent, useEffect } from "react";
import axios from "axios";
import Button from "./HoverButton";
import { useState } from "react";
import { BiSolidCommentEdit } from "react-icons/bi";
import Example from "./HoverButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
// import { clerk } from "./clerkConfig";
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
  const { data } = await axios.get(
    "https://freelance-gmjr.onrender.com/uploadImage"
  );
  return data as { uploadUrl: string; accessUrls: string };
};

export const UpdatePro = (props: TypePropsstate) => {
  const { push } = useRouter();
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
    uploadImage();
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

  const notifySuccess = () => {
    toast.success("💻 Profile changes saved successfully.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("❗ Oops! Incorrect email or password. Please try again", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const HandlerClick = async () => {
    try {
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/upUserSJ",
        profile
      );
      notifySuccess();
      console.log(data);
    } catch (err: any) {
      notifyError();
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
  const notifySuccessde = () => {
    toast.success(
      "🗑️ Deletion successful. The your account has been removed.",
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
  };

  const notifyErrorde = () => {
    toast.error("❗ Oops! Something went wrong", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const HandleDeleteAccount = async () => {
    try {
      const { data: ass } = await axios.post(
        "http://localhost:8000/deleteUser",
        {
          email: data?.email,
        }
      );
      console.log(ass, "asss nigas");
      localStorage.clear();
      push("/");
      notifySuccessde();
    } catch (err: any) {
      notifyErrorde();
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="max-sm:p-4 flex flex-col  justify-start p-[32px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  gap-[30px]">
        <div className="max-sm:mt-1 max-md:flex-col max-md:gap-8 max-md:mt-4 max-md:items-start flex items-center gap-[60px] w-[100%]  font-semibold text-[22px] mt-[30px]">
          <div className="skillTitle text-md">Profile Photo</div>
          <div className="max-md:flex-col max-md:items-start  flex items-center justify-center gap-12  ">
            <label
              className=" flex flex-col relative border border-gray-300 rounded-full p-3 bg-[#f8f9fc] items-center justify-center cursor-pointer"
              htmlFor="file-upload"
            >
              <Image
                alt=""
                src={`${profile?.image ? profile?.image : "/proq.webp"}`}
                width={0}
                height={0}
                sizes="100vw"
                className="max-w-24 max-h-24 min-w-16 min-h-16"
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
            <div className="max-sm:w-full flex gap-2">
              <button onClick={uploadImage} className="blueButton w-full">
                {loading ? "Loading" : "Upload Photo"}{" "}
              </button>
              <button
                onClick={deleteImage}
                className="cursor-pointer active:scale-[0.95] hover:scale-[1.05] blueBorderButton"
              >
                Delete photo
              </button>
            </div>
          </div>
        </div>
        {/* <div className="max-md:flex-col flex w-[100%] gap-[30px] mt-[20px]">
          <div className="updateProfileTitleBox">
            <h3 className="updateProfileTitles">FirstName:</h3>
            <InputUserProfile
              name="firstName"
              placeHolder="First Name"
              value={profile.firstName}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
          <div className="updateProfileTitleBox">
            <div className="updateProfileTitles">LastName:</div>
            <InputUserProfile
              name="lastName"
              placeHolder="Last Name"
              value={profile.lastName}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
        </div> */}
        <div className="max-md:flex-col max-md:mt-0 flex w-[100%] gap-[30px] mt-[20px]">
          <div className="updateProfileTitleBox">
            <div className="updateProfileTitles">Location:</div>
            <InputUserProfile
              name="location"
              placeHolder="add your location"
              value={profile.location}
              handlehange={(e: ChangeEvent<HTMLInputElement>) => handlehange(e)}
            />
          </div>
          <div className="updateProfileTitleBox">
            <div className="updateProfileTitles">Phone:</div>
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
          className="cursor-pointer w-fit active:scale-[0.95] hover:scale-[1.05] px-[15px] py-[10px] bg-[#0D47A1] rounded-2xl text-md text-white font-semibold"
        >
          save changes
          {/* <Example onclick={HandlerClick} /> */}
        </div>
      </div>
    </div>
  );
};
