import React from "react";
import { FaTools } from "react-icons/fa";
import { skillIcons } from "../../../components/Pills/SkillIcons.tsx"; 
import { ProjectTechnologiesProps } from "../../../types/projectTechnologies.ts";


const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies }) => {
  const technologiesArray: string[] = Array.isArray(technologies) ? technologies : [];

  return (
    <>
    <div className="w-full">
      <h4 className="mx-auto mb-6 text-xl font-semibold">Technologies</h4>
      <ul className="max-w-[700px] justify-center mx-auto flex flex-wrap gap-3 font-semibold uppercase text-gray-700 text-sm">
        {technologiesArray.map((tech, i) => {
          const icon = skillIcons[tech] || <FaTools />;
          return (
            <li
              key={i}
            className="flex items-center gap-2 rounded-lg bg-[rgba(var(--lightgreen),0.3)] font-['cup-cakes'] text-sm text-black px-3 py-1 shadow-sm transition hover:bg-indigo-100"
            >
              <span className="text-lg">{icon}</span>
              <span>{tech}</span>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
};

export default ProjectTechnologies;
