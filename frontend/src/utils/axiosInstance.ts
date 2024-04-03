import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://freelance-gmjr.onrender.com",
  //   headers: { Authorization: "Bearer token" },
});
