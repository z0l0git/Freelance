import { Footer } from "@/components/Footer/Footer";
import { FreelancerCard } from "@/components/FreelancerCardComponent/FreelancerCard";
import { FreelancerFilter } from "@/components/FreelancerFilter/FreelancerFilter";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";

const freelancer = [
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Bardam Tuulai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Gostuu Amaraa",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Anzog Agaa",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Hariugui gar",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Targan Galaa",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Blaavgai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "bas neg Blaavgai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Har Baagii",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },

  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Nayantai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <div className="flex flex-wrap md:flex-row flex-col w-screen items-start justify-center bg-slate-200 gap-5 pt-32">
        <FreelancerFilter mark={"NPL specialists"} counter={"45"} />
        <div className="flex max-w-full w-[880px] flex-wrap gap-[20px]">
          {freelancer.map((el, i) => {
            return (
              <FreelancerCard
                key={i}
                star={el.star}
                level={el.level}
                levelrank={el.levelrank}
                name={el.name}
                worktype={el.worktype}
                experience={el.experience}
                wages={el.wages}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
