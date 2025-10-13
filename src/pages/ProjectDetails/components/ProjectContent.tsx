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


      {/* Text Section */}
      <div className="flex flex-col rounded-sm p-5 gap-5  text-center w-full mt-6">
        <div className="bg-white rounded-sm p-4">
          <h4 className="text-2xl font-semibold pb-4">{project.descriptionHeader}</h4>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>
        
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
