"use client";
import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

type DataContextType = {
  isLoggedIn: boolean;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
