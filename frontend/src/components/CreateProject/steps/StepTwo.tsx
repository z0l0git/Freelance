import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

type DataType = {
  name: string;
  description: string;
};
type SkillType = {
  name: string;
  id: string;
};

type CateType = {
  dataProjectCategory: DataType[];
  skillCategory: SkillType[];
};

const StepTwo = (props: CateType) => {
  const { dataProjectCategory, skillCategory } = props;
  console.log(dataProjectCategory, "ddd");

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
          <div>
            <div className="flex flex-col gap-6">
              <p className="font-bold  text-[#212e48] text-[22px]">
                Which skill best fits your project?
              </p>
              <div className="flex items-center">
                <div className="border-b border-dashed w-full"></div>
                <div className="flex items-center justify-center w-[400px]">
                  <p className="text-[10px]">CHOOSE ANY SKILLS</p>
                </div>

                <div className="border-b border-dashed w-full"></div>
              </div>
            </div>
            <div className="w-[100%] flex flex-wrap gap-5 my-[30px]">
              {skillCategory?.map((el, index) => (
                <div className="bg-[#f8f9fc] px-[10px] py-[5px] w-fit rounded-xl font-bold  text-[#404a60] text-[18px]">
                  {el.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-bold  text-[#212e48] text-[22px]">
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
          <p>These suggestions are based on your brief&apos;s title.</p>
          <div className=" bg-[#f8f9fc] rounded-xl">
            {dataProjectCategory?.map((el, index) => (
              <RadioGroup
                key={index}
                className="flex flex-col gap-12 m-4 "
                defaultValue="comfortable"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" />
                  <div className="flex flex-col gap-4">
                    <p className="font-bold  text-[#404a60]">{el.name}</p>
                    <p>{el.description}</p>
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
            Let&apos;s talk details
          </h1>
          <p>Tell us a bit more about what you&apos;re looking for.</p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
