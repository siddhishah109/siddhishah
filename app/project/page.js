// @flow strict

import { allProjectsData } from "@/utils/data/all-projects-data";
import ProjectCard from "../components/homepage/projects/project-card";

 function page() {
 

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
         {
          allProjectsData.map((project, i) => (
            project?.image &&
            <ProjectCard project={project} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;