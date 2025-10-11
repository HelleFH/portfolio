import React from "react";
import { skillIcons } from "../../pages/index/components/SkillsList/SkillIcons.tsx";
import { FaTools } from "react-icons/fa";

interface Project {
  name: string;
  images: string[];
  technologies: string[];
}

interface CardProps {
  project: Project;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer border border-gray-300
        bg-gray-50 rounded-lg text-center w-full min-w-[250px] max-w-[350px]
        transition-all duration-200 ease-in-out
        hover:-translate-y-[1px] hover:shadow-md hover:bg-gray-100
        p-4
      "
    >
      <img
        src={project.images[0]}
        alt={project.name}
        className="w-full max-w-[150px] mx-auto mb-4"
      />

      <strong className="block mb-2 text-lg font-semibold text-[rgba(var(--dark-color))]">
        {project.name}
      </strong>

<ul className="flex flex-wrap items-center justify-center gap-1 mt-4">
  {project.technologies.map((tech, i) => {
    const trimmedTech = tech.trim();
    const icon = skillIcons[trimmedTech] || <FaTools className="text-gray-400" />; 
    return (
      <li
        key={i}
        className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[rgba(var(--darkgreen),0.1)] font-['lato'] dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-lg">{icon}</span>
        <span>{trimmedTech}</span>
      </li>
    );
  })}
</ul>

    </div>
  );
};

export default Card;
