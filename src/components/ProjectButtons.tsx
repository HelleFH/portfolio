import React from "react";
import Button from "./Buttons/Button.tsx";
import { ProjectButtonsProps } from "../types/projectButtons.ts";
import { FiExternalLink, FiGithub } from "react-icons/fi";


const ProjectButtons: React.FC<ProjectButtonsProps> = ({
  projectLink,
  githubLink,
  buttonText,
  githubButtonText,
}) => {
  return (
    <div className="flex gap-2 items-start mt-2">
      {projectLink && (
        <Button
          fontColor="rgb(var(--soft))"
          bgColor="rgb(var(--darkgreen))"
          className="flex items-center gap-2 text-[rgba(var(--white-color))] border border-[rgba(var(--darkgreen),0.6)] hover:bg-[rgba(var(--darkgreen),0.9)] transition-colors duration-200"
          onClick={() => window.open(projectLink, "_blank")}
        >
          <span>{buttonText}</span>
          <FiExternalLink className="text-sm" />
        </Button>
      )}

      {githubLink && (
        <Button
          bgColor="transparent"
          fontColor="rgb(var(--black-color))"
          className="flex items-center gap-2 border border-[rgba(var(--darkgreen),0.6)] text-[rgb(var(--black-color))] hover:bg-[rgba(var(--black-color),0.1)] transition-colors duration-200"
          onClick={() => window.open(githubLink, "_blank")}
        >
          <span>{githubButtonText}</span>
          <FiGithub className="text-sm" />
        </Button>
      )}
    </div>
  );
};

export default ProjectButtons;
