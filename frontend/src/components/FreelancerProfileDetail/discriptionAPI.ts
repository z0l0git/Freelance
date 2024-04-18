import axios from "axios";
type CategoryType = {
  name?: string;
  id?: string;
};
const CatergoriesAPI = async () => {
  const categoryArray = await CatergoriesAPI();

  try {
    const categoriesForSkills = await axios.get(
      "http://localhost:3000/discriptionUpdate"
    );
    console.log(categoriesForSkills);
    return categoriesForSkills;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const DispAPI = (props: CategoryType) => {
  //   const [categoryArray] = props;
  return;
};
