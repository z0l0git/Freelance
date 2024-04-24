"use client";
import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

type DataContextType = {
  isLoggedIn: boolean;
  setdata: React.Dispatch<React.SetStateAction<Response>>;
  data: Response;
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
  rating: Rating;
};

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    rating: {
      howMany: 0,
      stars: 0,
    },
  });

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (accessToken) {
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
      setIsLoggedIn(false);
      console.log("No");
    }
  }, [accessToken]);

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        data,
        setdata,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
