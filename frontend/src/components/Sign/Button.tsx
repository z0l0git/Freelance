"use client";

type ButtonType = {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};
export const Button = (props: ButtonType) => {
  const { text, onClick, type } = props;
  return (
    <div className=" ">
      <button
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className="w-[100%] px-[20px] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-bold text-[25px]"
        type={type}
      >
        {text}
      </button>
    </div>
  );
};
