import {
  OrangeButton,
  BlueButton,
  WhiteButton,
  ButtonWithBlueBorder,
} from "@/components/Button";

const page = () => {
  return (
    <div className="w-screen">
      <OrangeButton buttonName="Search" />
      <BlueButton buttonName="Post A Project" />
      <WhiteButton buttonClass="bg-black text-white" buttonName="Contact" />
      <ButtonWithBlueBorder buttonName="View Services" />
    </div>
  );
};
export default page;
