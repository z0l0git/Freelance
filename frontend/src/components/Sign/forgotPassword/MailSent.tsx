import { FiMail } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";

export const MailSent = ({
  setEmail,
}: {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col  items-center">
      <div className="font-bold text-[35px] text-white mb-[35px]">Email</div>
      <div className="mb-[35px]">
        <Input icon={<FiMail />} placHolder="Email" name="email" onchange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      </div>
    </div>
  );
};
