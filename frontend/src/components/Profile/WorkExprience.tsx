import { InfoDetailsMap } from "./ProfileMaps";

const InfoData = [
  {
    year: "2013-2021",
    topic: "Python Developer",
    title: "JK Software Ltd",
    text: "The Modern AI Institute is an organization dedicated to advancing the field of artificial intelligence (AI) through research, education, and innovation. It aims to explore the latest developments in AI and harness their potential for various applications.",
  },
  {
    year: "2013-2023",
    topic: "BSC in Machine Learning",
    title: "Stanford University",
    text: "Stanford University is a prestigious institution located in Stanford, California, United States. It is renowned for its academic excellence and has a strong reputation in various fields, including artificial intelligence (AI).",
  },
];

type workDataType = {
  year: string;
  hiredY: string;
  firedY: string;
  occupation: string;
  companyName: string;
  about: string;
};

type WorkProps = {
  workData: workDataType[];
};

export const WorkExprience = (props: WorkProps) => {
  const { workData } = props;
  return (
    <div className="w-[362px] md:w-[816px] h-fit flex flex-col justify-center ">
      <strong className="text-[18px] md:text-[20px] font-sans">
        Work & Exprience :
      </strong>
      <div className="w-full flex justify-between pt-4">
        <div className="w-[676px] flex flex-col justify-between gap-[20px]">
          {workData.map((el, index) => {
            return (
              <InfoDetailsMap
                key={index}
                year={el.hiredY + " - " + el.firedY}
                topic={el.occupation}
                title={el.companyName}
                text={el.about}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
