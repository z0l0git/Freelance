import { on } from "events";

type ButtonType = {
  text: string;
  onClick: any;
};
export const Button = (props: ButtonType) => {
  const { text, onClick } = props;
  return (
    <div className=" ">
      <button
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className="w-[500px] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-bold text-[25px]"
      >
        {text}
      </button>
    </div>
  );
};
