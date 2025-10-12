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

  const location = useLocation();
  const { selectedProjectIndex: passedIndex } = location.state || {};

  // Combine all projects into one list
  const allProjects = [
    ...frontendProjects.map((p) => ({ ...p, type: "frontend" })),
    ...myProjects.map((p) => ({ ...p, type: "myprojects" })),
  ];

  // Open modal when coming from "Read More"
  useEffect(() => {
    if (passedIndex !== undefined) {
      setSelectedProjectIndex(passedIndex);
      setIsModalOpen(true);
    }
  }, [passedIndex]);

  // ---- OPEN / CLOSE MODAL ----
  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
  };

  // ---- MODAL NAVIGATION ----
  const handlePrev = () => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex(
      selectedProjectIndex === 0 ? allProjects.length - 1 : selectedProjectIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex(
      selectedProjectIndex === allProjects.length - 1 ? 0 : selectedProjectIndex + 1
    );
  };

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
            About Me
          </TextLink>
          page.
        </h2>

        <div
          className="grid auto-rows-auto gap-4 md:gap-6 w-full bg-[rgba(var(--white-color))] md:p-8 rounded-lg shadow-sm"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        >
          {[...frontendProjects, ...myProjects].map((project, index) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => {
                const combinedIndex = allProjects.findIndex((p) => p.id === project.id);
                openModal(combinedIndex);
              }}
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
          projects={allProjects}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </div>
  );
};

export default ProjectsOverview;
