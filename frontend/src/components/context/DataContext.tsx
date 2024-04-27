"use client";
import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

type DataContextType = {
  isLoggedIn: boolean;
  setdata: React.Dispatch<React.SetStateAction<Response>>;
  data: Response;
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
  rating: Rating;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

type SkillT = {
  id?: string;
};
type Rating = {
  howMany: number;
  stars: number;
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
  createdAt: string;
  image: string;
  jobTitle: string;
  budget: number;
  skills: SkillT[];
};

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn, "deer");

  const [rating, setRating] = useState<Rating>({
    howMany: 0,
    stars: 0,
  });

  const [data, setdata] = useState<Response>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    discription: "",
    location: "",
    createdAt: "",
    image: "",
    jobTitle: "",
    budget: 0,
    skills: [],
  });
  console.log(isLoggedIn);

  useEffect(() => {
    const getLoggedUser = async () => {
      console.log("Function called");
      const accessToken =
        typeof window !== "undefined" && localStorage.getItem("token");
      console.log(accessToken, "this is token");

      if (accessToken !== null) {
        try {
          const { data } = await axios.get(
            "https://freelance-gmjr.onrender.com/users/refresh",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setdata(data);
          localStorage.setItem("userId", data._id);
          setIsLoggedIn(true);
          console.log("User logged in successfully");
        } catch (error) {
          setIsLoggedIn(false);
          console.error("Error from getLoggedUser:", error);
        }
      }
      if (accessToken === null) {
        console.log("checking again");
        console.log(isLoggedIn);
        console.log(accessToken, "tohnn");

        setTimeout(getLoggedUser, 1000);
      }
    };
    getLoggedUser();
  }, []);

  // const sda = () => {
  //   if (!isLoggedIn) {
  //     console.log("loggded", isLoggedIn);
  //     console.log("checking again");

  //     setTimeout(getLoggedUser, 1000);
  //   }
  // };

  // useEffect(() => {
  //   getLoggedUser();
  //   // sda();
  // }, []);

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        data,
        setdata,
        rating,
        setRating,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
