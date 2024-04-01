import { NameInputComponent } from "@/components/Input";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TextAreaComponent } from "@/components/TextArea";

const Chinzorig = () => {
  return (
    <div className="flex w-screen justify-center items-center py-10">
      <div className="flex w-[1280px] justify-start items-center gap-5">
        <div className="flex flex-col w-[416px] h-fill bg-slate-200 p-8 rounded-2xl">
          <div className="flex flex-col  gap-4">
            <div className="flex flex-col mb-8 pb-8 w-full">
              <h3 className="text-2xl font-semibold">Need more help?</h3>
            </div>
            <div className="flex items-center justify-center gap-5 py-6 px-5 border border-black rounded-lg">
              <div className=" bg-slate-200">
                <IoCallOutline className=" bg-white w-[80px] h-[80px] p-3 flex items-center justify-center border border-black rounded-full" />
              </div>
              <div className="flex flex-col justify-center border-solid  w-[119px] ">
                <h2 className="text-xl font-semibold mb-4">Call Now</h2>
                <h6>88889999</h6>
                <h6>99998888</h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 py-6 px-5 border border-black rounded-lg">
              <div className=" bg-slate-200">
                <CiMail className=" bg-white w-[80px] h-[80px] p-3 flex items-center justify-center border border-black rounded-full" />
              </div>
              <div className="flex flex-col justify-center border-solid  w-[119px] ">
                <h2 className="text-xl font-semibold mb-5">Email</h2>
                <h6>info@example.com</h6>
                <h6>info@example.com</h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 py-6 px-5 border border-black rounded-lg">
              <div className=" bg-slate-200">
                <CiLocationOn className=" bg-white w-[80px] h-[80px] p-3 flex items-center justify-center border border-black rounded-full" />
              </div>
              <div className="flex flex-col justify-center border-solid  w-[119px] ">
                <h2 className="text-xl font-semibold mb-5">Location</h2>
                <h6>Ulaanbaatar Sukhbaatar district</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[856px] h-[653px] bg-slate-200 p-8 rounded-2xl">
          <div className="flex flex-col mb-8 pb-8 w-full">
            <h3 className="text-2xl font-semibold">Get in touch with us.</h3>
          </div>

          <div className="flex flex-col  justify-between items-center w-full h-full">
            <div className="flex w-full h-[90px]">
              <div className="w-[396px] h-[90px] px-3 mt-6">
                <NameInputComponent
                  name="Name"
                  placeholder="Enter Your Name"
                  type="text"
                />
              </div>
              <div className="w-[396px] h-[90px] px-3 mt-6">
                <NameInputComponent
                  name="Email"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="flex w-full h-[90px]">
              <div className="w-[396px] h-[90px] px-3 mt-6">
                <NameInputComponent
                  className=""
                  name="Phone"
                  type="number"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="w-[396px] h-[90px] px-3 mt-6">
                <NameInputComponent
                  type="password"
                  name="Password"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div>
              <div className="w-[792px] h-[180px]">
                <TextAreaComponent name="Message" className="bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chinzorig;