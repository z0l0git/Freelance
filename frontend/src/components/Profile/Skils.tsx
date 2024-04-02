"use client"
import { SkillsMap } from "./ProfileMaps"



const Skill = [
    {
        MySkills: "UI/UX Design"
    },
    {
        MySkills: "Front End"
    },
    {
        MySkills: "Back End"
    },
    {
        MySkills: "Data Analytics"
    },
    {
        MySkills: "Machine Learning"
    }
]



export const Skills = () => {
    return (
        <div className="w-[816px] h-fit mt-3 mb-6">
            <strong className="text-6 ">My Skills :</strong>
            <div className="w-full h-[41px] mt-4 flex justify-between">
                {Skill.map((el, index) => {
                    return (
                        <SkillsMap key={index}
                            MySkills={el.MySkills} />
                    )
                })}
            </div>
        </div>
    )
}