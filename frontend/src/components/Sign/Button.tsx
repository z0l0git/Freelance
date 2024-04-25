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
        className="w-[100%] px-[20px] xs:h-[45px] h-[30px] xs:text-[20px] text-[16px] flex justify-center items-center text-black bg-white rounded-[40px] font-bold "
        type={type}
      >
        {text}
      </button>
    </div>
  );
};
