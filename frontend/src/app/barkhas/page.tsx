"use client";

import Stepper from "@/components/CreateProject/Stepper";

const page = ({ step }: { step: number }) => {
  return (
    <div>
      <Stepper step={step} />
    </div>
  );
};

export default page;
