import React from "react";
import { CardProject } from "@/components/01-atoms";
import { ObjCardProject } from "@/components/utils";

export const ProjectsEcosystem = () => {
  return (
    <div className="grid xl:grid-cols-3  xl:gap-5 lg:grid-cols-2 lg:gap-5 lg:mt-5 md:grid-cols-1 md:gap-5 md:mt-5">
      {ObjCardProject.map((project, index) => (
        <div key={index}>
          <CardProject projects={[project]} />
        </div>
      ))}
    </div>
  );
};
