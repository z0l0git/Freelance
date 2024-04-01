type ButtonType = {
  text: string;
};
export const Button = (props: ButtonType) => {
  const { text } = props;
  return (
    <div className=" ">
      <button className="w-[500px] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-bold text-[25px]">
        {text}
      </button>
    </div>
  );
};
