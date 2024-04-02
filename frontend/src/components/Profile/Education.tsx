import { InfoDetailsMap } from "./ProfileMaps"

const InfoData = [
    {
        year: "2013-2021",
        topic: "Python Developer",
        title: "JK Software Ltd",
        text: "The Modern AI Institute is an organization dedicated to advancing the field of artificial intelligence (AI) through research, education, and innovation. It aims to explore the latest developments in AI and harness their potential for various applications."
    }, {
        year: "2013-2023",
        topic: "BSC in Machine Learning",
        title: "Stanford University",
        text: "Stanford University is a prestigious institution located in Stanford, California, United States. It is renowned for its academic excellence and has a strong reputation in various fields, including artificial intelligence (AI)."
    }
]


export const Education = () => {
    return (
        <div className="w-[816px] h-fit flex flex-col ">
            <strong className="text-[20px] font-sans">Education</strong>
            <div className="w-full flex justify-between pt-4">
                <div></div>
                <div className="w-[676px] flex flex-col justify-between gap-[20px]">
                    {InfoData.map((el, index) => {
                        return (
                            <InfoDetailsMap key={index}
                                year={el.year}
                                topic={el.topic}
                                title={el.title}
                                text={el.text}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}