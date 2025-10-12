import ProjectDetailsList from "./ProjectDetailsList.tsx";
import ProjectTechnologies from "./ProjectTechnologies.tsx";

interface Project {
  name: string;
  descriptionHeader: string;
  description: string;
  images: string[];
  projectDetails?: string[];
  technologiesMore?: string[];
}

const ProjectContent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      {/* Image */}
      <div className="w-full max-w-2xl overflow-hidden rounded-lg shadow-md mt-4">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-5 text-gray-800 text-left w-full mt-6">
        <h4 className="text-2xl font-semibold">{project.descriptionHeader}</h4>
        <p className="text-lg leading-relaxed">{project.description}</p>

        {project.projectDetails && (
          <ProjectDetailsList details={project.projectDetails} />
        )}

        {project.technologiesMore && (
          <ProjectTechnologies technologies={project.technologiesMore} />
        )}
      </div>
    </>
  );
};

export default ProjectContent;
