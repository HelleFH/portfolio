import React from "react";

interface Project {
  name: string;
  images: string[];
  technologiesMore: string[];
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
        bg-gray-50 rounded-lg text-center w-full min-w-[200px]
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

      <ul
        className="
          list-none flex justify-center flex-wrap gap-2
          font-sans font-normal w-full px-2 mb-2
        "
      >
        {project.technologiesMore.map((tech, index) => (
          <li key={index} className=" text-sm relative before:content-['•'] before:mr-2 first:before:content-['']">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
