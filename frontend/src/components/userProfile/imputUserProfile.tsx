import { ChangeEvent } from "react";
type Propstypee = {
  name: string;
  placeHolder: string;
  value: string;
  handlehange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const InputUserProfile = (props: Propstypee) => {
  const { name, placeHolder, value, handlehange } = props;
  return (
    <div className="p-[10px] w-[100%] bg-white rounded-[15px] border border-gray-300">
      <input
        className="outline-none  w-[100%]"
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={handlehange}
      />
    </div>
  );
};
