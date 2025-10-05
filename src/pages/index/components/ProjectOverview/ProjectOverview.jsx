import React, { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import ProjectModal from "../ProjectModal/ProjectModal";
import { frontendProjects } from "../../../../data/frontendprojects";
import { fullStackProjects } from "../../../../data/fullstackprojects";
import { useLocation } from "react-router-dom";
import AnimatedSection from "../../../../components/AnimatedSection";

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState(null);

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

  const openModal = (index, type) => {
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
      currentProjectType === "frontend" ? frontendProjects : fullStackProjects;
    return base.map((p) => ({ ...p, type: currentProjectType }));
  };

  const handlePrev = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const currentProjects = getProjects();

  return (
    <div className="flex flex-col items-center w-full rounded-lg">
      {/* Intro Section */}
      <div
        id="react-projects"
        className="w-full max-w-6xl bg-white rounded-lg p-6 md:p-8 text-center mb-6 shadow-sm"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          React Projects
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Here are some examples of the work I've done in React.
        </p>
      </div>

      {/* Project Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 
                   w-full max-w-6xl bg-white p-6 md:p-8 rounded-lg shadow-sm mb-16"
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
  );
};

export default ProjectsOverview;
