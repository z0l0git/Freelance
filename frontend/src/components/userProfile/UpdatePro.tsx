import Image from "next/image";
import { InputUserProfile } from "./imputUserProfile";
export const UpdatePro = () => {
  return (
    <div>
      <div className="flex flex-col  justify-start p-[32px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  gap-[30px]">
        <div className="flex items-center gap-[70px] w-100%  font-semibold text-[22px] mt-[30px]">
          <div>Update Profile</div>
          <div className="flex  items-center justify-center gap-[50px]  ">
            <Image alt="" src="/pro.png" width={100} height={100} />
            <div>update photo </div>
            <div>Delete photo</div>
          </div>
        </div>
        <div className="flex w-[100%] gap-[30px] mt-[20px]">
          <div className="w-[50%] ">
            <div className="font-semibold text-[22px] mb-[20px] ">
              FirstName:
            </div>
            <InputUserProfile />
          </div>
          <div className="w-[50%]">
            <div className="font-semibold text-[22px] mb-[20px] ">
              FirstName:
            </div>
            <InputUserProfile />
          </div>
        </div>
        <div className="flex w-[100%] gap-[30px] mt-[20px]">
          <div className="w-[50%] ">
            <div className="font-semibold text-[22px] mb-[20px] ">Email:</div>
            <InputUserProfile />
          </div>
          <div className="w-[50%]">
            <div className="font-semibold text-[22px] mb-[20px] ">Phone:</div>
            <InputUserProfile />
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-start p-[28px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  mt-[32px]">
        <div className="font-semibold text-[38px] mb-[20px]">Address</div>
        <div className="w-[100%] ">
          <div className="font-semibold text-[22px] mb-[20px] ">Location:</div>
          <InputUserProfile />
        </div>
      </div>
      <div className="flex flex-col  justify-start p-[28px] bg-[#f8f9fc] rounded-[15px] border border-gray-300  mt-[32px]">
        <div className="font-semibold text-[38px] mb-[20px]">
          Delete Account
        </div>
        <div>
          When you delete your account, you lose access to Front account
          services, and we permanently delete your personal data. You can cancel
          the deletion for 14 days.
        </div>
        <div className="mt-[20px] text-[24px] font-semibold">Delete</div>
      </div>
    </div>
  );
};
