import { Button } from "../Button";
import { Input } from "../Input";
import { FiMail } from "react-icons/fi";
export const CodeVerify = ({
  setCode,
}: {
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col  ">
      <div className="font-normal text-[25px] text-white mb-[35px]">
        tanii <span className="text-green-400">asd</span> mail ruu code ywuulah
        boln
      </div>
      <div className="mb-[35px] ">
        <Input
          icon={<FiMail />}
          placHolder="code"
          name="email"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
      </div>
    </div>
  );
};
