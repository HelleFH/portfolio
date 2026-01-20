import React from "react";
import ProjectButtons from "../../../components/ProjectButtons.tsx";
import ProjectDetailsList from "./ProjectDetailsList.tsx";
import ProjectTechnologies from "./ProjectTechnologies.tsx";
import { ProjectContentProps } from "../../../types/projectContent.ts";

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (  
    
    <div className="flex flex-col items-center justify-center gap-8 rounded-sm p-3 md:p-5 text-center w-full mt-6">
      {/* Project Description */}
      <div className="bg-[rgba(var(--white-color))] rounded-sm shadow-sm">
        <h4 className="text-2xl font-semibold p-4">
          {project.descriptionHeader}
        </h4>
        <p className="text-lg text-justify px-6 py-3 leading-relaxed pb-10">{project.description}</p>
      </div>

      {/* Project Details */}
      {project.projectDetails && (
        <ProjectDetailsList details={project.projectDetails} />
      )}

      {/* Technologies */}
      {project.technologiesMore && (
        <ProjectTechnologies technologies={project.technologiesMore} />
      )}

      {/* Buttons */}
      {(project.projectLink || project.githubLink) && (
        <div className="flex w-full justify-center">
          <ProjectButtons
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            buttonText={project.buttonText}
            githubButtonText={project.githubButtonText}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
