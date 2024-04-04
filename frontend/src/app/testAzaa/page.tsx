import { Header } from "@/components/Header/HeaderComp";
import { Profile } from "@/components/Profile/Profile";
import { BlueButton } from "@/components/Button";
import { Error } from "@/components/Error/Error";
import { HomePagePart } from "../../components/HomePagePart";

const Test = () => {
  return (
    <div>
      {/* <Header /> */}
      <Profile />
      <Error />
      {/* <HomePagePart /> */}
    </div>
  );
};

export default Test;
