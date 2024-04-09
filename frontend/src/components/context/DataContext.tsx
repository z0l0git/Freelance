"use client";
import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

type DataContextType = {
  isLoggedIn: boolean;
  data: Response;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);
type Response = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  discription: string;
};

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setdata] = useState<Response>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    discription: "",
  });

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("Token");

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
          setIsLoggedIn(true);
          console.log("yes");
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
