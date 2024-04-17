// import React from "react";
// import { Projects } from "./Projects";
// import axios from "axios";

// const GetAllPosts = async () => {
//   try {
//     const { data } = await axios.get("http://localhost:8000/getAllProject");

//     return data;
//   } catch (err: any) {
//     console.log(err.message);
//   }
// };

// export default async function ProjectsGet() {
//   const AllPost = await GetAllPosts();

//   return (
//     <div>
//       <Projects AllPost={AllPost} />
//     </div>
//   );
// }
// // 