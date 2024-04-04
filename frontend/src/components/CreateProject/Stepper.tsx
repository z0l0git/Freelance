import React from "react";

const Stepper = ({ step }: { step: number }) => {
  const stepTexts = [
    "About The Project",
    "Your Preferences",
    "Add Timeline and Budget",
  ];
  return (
    <div className="flex flex-col items-center gap-5 p-8">
      <ul className="steps flex items-center justify-center border rounded-xl w-[1000px]">
        {stepTexts.map((item, index) => (
          <div key={index} className="flex items-center p-2">
            <div className="flex flex-col items-center gap-y-2">
              <li
                className={`w-10 h-10 text-black flex items-center justify-center border border-dashed border-[#0d47a1] rounded-full ${
                  step >= index
                    ? "bg-[#0d47a1] text-white"
                    : "bg-white text-black"
                } `}
              >
                {index + 1}
              </li>
              <p className="w-full">{item}</p>
            </div>
            {index < stepTexts.length - 1 && (
              <span
                className={`border border-dashed bg-[#0d47a1] w-60 mb-6 rounded-lg`}
              ></span>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
