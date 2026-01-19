import React from "react";
import { skillIcons } from "./Pills/SkillIcons.tsx";
import { FaTools } from "react-icons/fa";
import ResponsiveImage from "./ResponsiveImage.tsx";
import { CardProps } from "../types/card.ts";



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
<ResponsiveImage
  imageSet={project.images[0]} // now works with your responsive objects
  alt={project.name}
  className="w-full max-w-[150px] mx-auto mb-4"
/>

      <strong className="block mb-2 text-lg font-semibold text-[rgba(var(--dark-color))]">
        {project.name}
      </strong>

<ul className="flex flex-wrap  items-center justify-center gap-1 mt-4">
  {project.technologies.map((tech, i) => {
    const trimmedTech = tech.trim();
    const icon = skillIcons[trimmedTech] || <FaTools className="text-gray-400" />; 
    return (
      <li
        key={i}
            className="flex items-center gap-2 rounded-lg bg-[rgba(var(--darkgreen),0.1)] font-['cup-cakes'] text-sm text-black px-3 py-1 shadow-sm transition hover:bg-indigo-100"
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
