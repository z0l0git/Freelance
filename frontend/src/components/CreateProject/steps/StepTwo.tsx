import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

const StepTwo = () => {
  const items = [
    {
      name: "Natural Language Processing (NLP)",
      text: "This category focuses on the interaction between computers",
    },
    {
      name: "Computer Vision",
      text: "Computer vision involves teaching computers to understand",
    },
    {
      name: "Machine Learning",
      text: "Machine learning is a fundamental component of AI",
    },
    {
      name: "Deep Learning",
      text: "Deep learning is a subset of machine learning",
    },
    {
      name: "Robotics and Automation",
      text: "AI is applied in robotics to develop intelligent systems capable",
    },
    {
      name: "Recommendation Systems",
      text: "Recommendation systems use AI algorithms to suggest",
    },
    {
      name: "Data Analytics and Predictive Modeling",
      text: "AI is used to analyze large datasets, extract insights",
    },
    {
      name: "Virtual Assistants",
      text: "Virtual assistants utilize AI technologies to provide automated",
    },
    {
      name: "Healthcare AI",
      text: "AI is making significant contributions to the healthcare industry",
    },
  ];

  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col border rounded-xl p-4 gap-4 w-[750px]">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold  text-[#212e48] text-[30px]">
              Your Preferences
            </h1>
            <div className="border-b border-dashed w-full"></div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-bold  text-[#212e48]">
              Which category best fits your project?
            </p>
            <div className="flex items-center">
              <div className="border-b border-dashed w-full"></div>
              <div className="flex items-center justify-center w-[400px]">
                <p className="text-[10px]">CHOOSE ANY CATEGORIES</p>
              </div>

              <div className="border-b border-dashed w-full"></div>
            </div>
          </div>
          <p>These suggestions are based on your brief’s title.</p>
          <div className=" bg-[#f8f9fc] rounded-xl">
            {items.map((el, index) => (
              <RadioGroup
                key={index}
                className="flex flex-col gap-12 m-4 "
                defaultValue="comfortable"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" />
                  <div className="flex flex-col gap-4">
                    <p className="font-bold  text-[#404a60]">{el.name}</p>
                    <p>{el.text}</p>
                    <div className="border-b border-dashed w-full"></div>
                  </div>
                </div>
              </RadioGroup>
            ))}
          </div>
        </div>
      </div>
      <div className="border rounded-xl w-[434px] h-[380px]">
        <div className="flex flex-col m-4  gap-5">
          <h1 className="font-bold  text-[#212e48] text-[30px]">
            Let’s talk details
          </h1>
          <p>Tell us a bit more about what you're looking for.</p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
