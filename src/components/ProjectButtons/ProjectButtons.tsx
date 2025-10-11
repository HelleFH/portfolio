import React from "react";
import Button from "../Buttons/Button.tsx";

interface ProjectButtonsProps {
  projectLink: string;
  githubLink: string;
  buttonText: string;
  githubButtonText: string;
}

const ProjectButtons: React.FC<ProjectButtonsProps> = ({
  projectLink,
  githubLink,
  buttonText,
  githubButtonText,
}) => {
  return (
    <div className="flex gap-2 items-start mt-2">
      <Button
        bgColor="rgb(var(--darkgreen))"
        className="text-white border border-[rgba(var(--darkgreen),0.6)] hover:bg-[rgba(var(--darkgreen),0.9)] transition-colors duration-200"
        onClick={() => window.open(projectLink, "_blank")}
      >
        {buttonText}
      </Button>

      <Button
        bgColor="transparent"
        fontColor="rgb(var(--black-color))"
        className="border border-[rgba(var(--darkgreen),0.6)] text-[rgb(var(--black-color))] hover:bg-[rgba(var(--darkgreen),0.05)] transition-colors duration-200"
        onClick={() => window.open(githubLink, "_blank")}
      >
        {githubButtonText}
      </Button>
    </div>
  );
};

export default ProjectButtons;
