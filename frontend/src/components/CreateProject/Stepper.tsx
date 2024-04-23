import React from "react";

const Stepper = ({ step }: { step: number }) => {
  const stepTexts = [
    "About The Project",
    "Your Preferences",
    "Add Timeline and Budget",
  ];
  return (
    <div className="max-md:w-10/12 max-md:mx-auto w-full h-fit flex flex-col items-center  p-8  bg-white rounded-xl border mt-[-100px]">
      <ul className="w-full steps flex flex-wrap md:flex items-center justify-center border rounded-xl ">
        {stepTexts.map((item, index) => (
          <div key={index} className=" flex items-center p-2">
            <div className=" flex flex-col items-center gap-y-2 ">
              <div
                className={`w-10 h-10 text-black flex items-center justify-center border border-dashed border-[#0d47a1] rounded-full ${
                  step >= index
                    ? "bg-[#0d47a1] text-white"
                    : "bg-white text-black"
                } `}
              >
                {index + 1}
              </div>
              <p className="w-full">{item}</p>
            </div>
            {index < stepTexts.length - 1 && (
              <div
                className={`flex border border-dashed bg-[#0d47a1] md:w-10  mb-6 rounded-lg `}
              ></div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
