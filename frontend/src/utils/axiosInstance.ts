import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://freelance-gmjr.onrender.com",
  //   headers: { Authorization: "Bearer token" },
});

export const GetProjectCategory = async () => {
  try {
    const { data } = await axios.get(
      "https://freelance-gmjr.onrender.com/getProjectCategory"
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const GetSkillCategory = async () => {
  try {
    const { data } = await axios.get(
      "https://freelance-gmjr.onrender.com/categories"
    );
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
