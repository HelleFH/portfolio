import React, { useState, useEffect } from "react";
import Card from "../../../../components/Cards.tsx";
import ProjectModal from "../../../../components/ProjectModal.tsx";
import { frontendProjects } from "../../../../data/frontendprojects.js";
import { myProjects } from "../../../../data/myProjects.js";
import { Link, useLocation } from "react-router-dom";
import TextLink from "../../../../components/Links/TextLink.tsx";

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState<string | null>(null);

  const location = useLocation();
  const { selectedProjectIndex: passedIndex, projectType: passedType } =
    location.state || {};

  // Restore modal state when navigated from ProjectDetail
  useEffect(() => {
    if (passedIndex !== undefined && passedType) {
      setSelectedProjectIndex(passedIndex);
      setCurrentProjectType(passedType);
      setIsModalOpen(true);
    }
  }, [passedIndex, passedType]);

  // Open modal for clicked project
  const openModal = (index: number, type: string) => {
    setSelectedProjectIndex(index);
    setCurrentProjectType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
    setCurrentProjectType(null);
  };

  // Get correct project list based on type
  const getProjects = () => {
    if (currentProjectType === "frontend") {
      return frontendProjects.map((p) => ({ ...p, type: "frontend" }));
    }
    return myProjects.map((p) => ({ ...p, type: "myprojects" }));
  };

  const handlePrev = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : (prev || 0) - 1
    );
  };

  const handleNext = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : (prev || 0) + 1
    );
  };

  const currentProjects = getProjects();

  return (
    <div>
      <h1 className="font-['PangramSans-Medium'] font-semibold   text-2xl mb-5">My most recent work</h1>

      <p>You can view more of my projects, including school and hobby projects,


        <TextLink to="/project-overview">
          here
        </TextLink>


      </p>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-start w-full rounded-lg">
        {/* Project Grid */}
        <div
          className="grid auto-rows-auto gap-4 md:gap-6 
                   w-full bg-[rgba(var(--white-color))] p-2 rounded-lg shadow-sm "
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        >
          {frontendProjects.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => openModal(index, "frontend")}
            />
          ))}

        </div>

        {/* Modal */}
        {isModalOpen && selectedProjectIndex !== null && (
          <ProjectModal
            show={isModalOpen}
            handleClose={closeModal}
            selectedProjectIndex={selectedProjectIndex}
            projects={currentProjects}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleShowLoginDetails={() => console.log("Show login")}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsOverview;
