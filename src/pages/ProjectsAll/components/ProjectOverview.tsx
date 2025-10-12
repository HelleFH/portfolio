import React, { useState, useEffect } from "react";
import Card from "../../../components/Cards.tsx";
import ProjectModal from "../../../components/ProjectModal.tsx";
import { frontendProjects } from "../../../data/frontendprojects.js";
import { myProjects } from "../../../data/myProjects.js";
import { useLocation } from "react-router-dom";
import TextLink from "../../../components/Links/TextLink.tsx";

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState<string | null>(null);

  const location = useLocation();
  const { selectedProjectIndex: passedIndex, projectType: passedType } =
    location.state || {};

  // Open modal when coming from "Read More"
  useEffect(() => {
    if (passedIndex !== undefined && passedType) {
      setSelectedProjectIndex(passedIndex);
      setCurrentProjectType(passedType);
      setIsModalOpen(true);
    }
  }, [passedIndex, passedType]);

  // ---- OPEN / CLOSE MODAL ----
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

  // ---- GET PROJECTS BASED ON TYPE ----
  const getProjects = () => {
    const base =
      currentProjectType === "frontend" ? frontendProjects : myProjects;
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

  // ---- RENDER ----
  return (
    <div className="flex flex-col w-full justify-center items-center gap-12">
      {/* 🧩 FRONTEND PROJECTS */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Here's a look at some of web development work, including professional, school, and hobby projects.
          To learn more about my experience and profile, please see
          <TextLink to="/CV" className="mr-1 text-2xl">
            my CV
          </TextLink>
          or my
          <TextLink to="/about" className=" text-2xl">
            About Me  </TextLink>
          page.

        </h2>

        <div
          className="grid auto-rows-auto gap-4 md:gap-6 
                    w-full bg-[rgba(var(--white-color))] md:p-8 rounded-lg shadow-sm"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        >
          {frontendProjects.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => openModal(index, "frontend")}
            />
          ))}

          {myProjects.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => openModal(index, "myprojects")}
            />
          ))}
        </div>
      </section>

      {/* 🪟 MODAL */}
      {isModalOpen && selectedProjectIndex !== null && (
        <ProjectModal
          show={isModalOpen}
          handleClose={closeModal}
          selectedProjectIndex={selectedProjectIndex}
          projects={currentProjects}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </div>
  );
};

export default ProjectsOverview;
