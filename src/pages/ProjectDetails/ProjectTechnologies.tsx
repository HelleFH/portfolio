import React from "react";
import { FaTools } from "react-icons/fa";
import { skillIcons } from "../../components/Pills/SkillIcons.tsx"; 

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies }) => {
  // Ensure we have an array
  const technologiesArray: string[] = Array.isArray(technologies) ? technologies : [];

  return (
    <>
    
      <h4 className="mx-auto text-xl font-semibold mt-4">Technologies Used</h4>
      <ul className="mx-auto flex flex-wrap gap-3 font-semibold uppercase text-gray-700 text-sm">
        {technologiesArray.map((tech, i) => {
          const icon = skillIcons[tech] || <FaTools />;
          return (
            <li
              key={i}
              className="flex items-center gap-1"
            >
              <span className="text-lg">{icon}</span>
              <span>{tech}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectTechnologies;
