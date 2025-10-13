import React from "react";
import ProjectButtons from "../../../components/ProjectButtons.tsx";
import ProjectDetailsList from "./ProjectDetailsList.tsx";
import ProjectTechnologies from "./ProjectTechnologies.tsx";

interface Project {
  id?: number;
  name: string;
  descriptionHeader: string;
  description: string;
  projectDetails?: string[];
  technologiesMore?: string[];
  projectLink?: string;
  githubLink?: string;
  buttonText?: string;
  githubButtonText?: string;
}

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    
    <div className="flex flex-col items-center gap-6 rounded-sm p-3 md:p-5 text-center w-full mt-6">
      {/* Project Description */}
      <div className="bg-white rounded-sm shadow-sm">
        <h4 className="text-2xl font-semibold pb-4">
          {project.descriptionHeader}
        </h4>
        <p className="text-lg leading-relaxed">{project.description}</p>
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
