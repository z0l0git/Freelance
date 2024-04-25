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
  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    console.log("if can hear token");
    if (accessToken) {
      console.log("if access token");

      const getloggedUser = async () => {
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
        } catch (error) {
          console.log("eror from get logged in user");
        }
      };
      getloggedUser();
    } else {
      console.log("else access token");

      setIsLoggedIn(false);
    }
  }, [accessToken]);

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
