import React from "react";
import { Contact } from "@/components/Contact/Contact";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Filter } from "@/components/Filter/Filter";

const categoryAr = [
  "Python",
  "Software Architecture",
  "API Integration",
  "Open AI",
];

const Chinzorig = () => {
  return (
    <div>
      {/* <Contact /> */}
      {/* <ProjectCard
        title={"Та минь ээ надад нэг ийм ажил байна"}
        price={"тохиролцоно"}
        description="I am looking for a Python developer гэжийнэ, энэ ажлыг ч**чих хоншоортой аавын хүү
        байвал хүрээд ир за. Хөлс мөнгөн дээрээ нэг их татганаад байхгүй
        гол нь гарууд юмаа аятайхан хийнэ шүү. За тэгээд энэ ажлыг
        хийчихвэл дараа нь өч төчнөөөн байгаа шүү. Өөр юу ч бичдгийм билээ
        яая дээ байз за за өөрсдөө болгооно биз. Би одоо юу вэ энд хөгшин
        чавганц шиг напь напь гээд юүхэв заа"
        category={categoryAr}
        expire={"Expire:"}
        location={"Location:"}
        level={"Level:"}
        proporsal={"Proporsal:"}
      /> */}
      <Filter title={"Types of Jobs"} jobs={"Local jobs"} counter={234} />
    </div>
  );
};

export default Chinzorig;
