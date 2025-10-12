import React, { useState, useEffect } from "react";
import Card from "../../../components/Cards/Cards.tsx";
import ProjectModal from "../../../components/ProjectModal/ProjectModal.tsx";
import { myProjects } from "../../../data/myProjects.js";
import { useLocation } from "react-router-dom";

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState<string | null>(null);

  const location = useLocation();
  const { selectedProjectIndex: passedIndex, projectType: passedType } =
    location.state || {};

  useEffect(() => {
    if (passedIndex !== undefined && passedType) {
      setSelectedProjectIndex(passedIndex);
      setCurrentProjectType(passedType);
      setIsModalOpen(true);
    }
  }, [passedIndex, passedType]);

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

  const getProjects = () => {
    const base =
      currentProjectType === "frontend" ? myProjects : myProjects;
    return base.map((p) => ({ ...p, type: currentProjectType }));
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

      {/* Project Grid */}
      <div
        className="grid auto-rows-auto gap-4 md:gap-6 
             w-full bg-[rgba(var(--white-color))] md:p-8 rounded-lg shadow-sm my-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {myProjects.map((project, index) => (
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
            projects={myProjects.map(p => ({ ...p, type: "myprojects" }))}

          handlePrev={handlePrev}
          handleNext={handleNext}
          handleShowLoginDetails={() => console.log("Show login")}
        />
      )}
    </div>
  );
};

export default ProjectsOverview;
