import React, { useState, useEffect } from "react";
import Card from "../../../../components/Cards.tsx";
import ProjectModal from "../../../../components/ProjectModal.tsx";
import { projects } from "../../../../data/frontendprojects.js";
import { useLocation } from "react-router-dom";
import TextLink from "../../../../components/Links/TextLink.tsx";
import AnimatedSection from "../../../../components/AnimatedSection.jsx";

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const { selectedProjectIndex: passedIndex } = location.state || {};

  // ✅ Only include frontpage projects
  const frontpageProjects = projects.filter((p) => p.frontpage);

  useEffect(() => {
    if (passedIndex !== undefined) {
      setSelectedProjectIndex(passedIndex);
      setIsModalOpen(true);
    }
  }, [passedIndex]);

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prev) =>
      prev === 0 ? frontpageProjects.length - 1 : (prev || 0) - 1
    );
  };

  const handleNext = () => {
    setSelectedProjectIndex((prev) =>
      prev === frontpageProjects.length - 1 ? 0 : (prev || 0) + 1
    );
  };

  return (
    <div>
      <h1 className="font-['PangramSans-Medium'] font-semibold text-2xl mb-5">
        My most recent work
      </h1>
      <AnimatedSection>
        <p>
          Here's some of my recent projects. You can view more of my projects, including school and hobby projects,
          <TextLink to="/project-overview"> here</TextLink>.
        </p>
      </AnimatedSection>
      <AnimatedSection>

        <div className="mt-5 flex flex-col gap-4 md:gap-0 md:flex-row items-start w-full rounded-lg">

          <div
            className="grid auto-rows-auto gap-4 md:gap-6 
                   w-full bg-[rgba(var(--white-color))] p-4 rounded-lg shadow-sm"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {frontpageProjects.map((project, index) => (
              <Card
                key={project.id}
                project={project}
                onClick={() => openModal(index)}
              />
            ))}
          </div>

          {isModalOpen && selectedProjectIndex !== null && (
            <ProjectModal
              show={isModalOpen}
              handleClose={closeModal}
              selectedProjectIndex={selectedProjectIndex}
              projects={frontpageProjects} // ✅ Only frontpage projects shown in modal navigation
              handlePrev={handlePrev}
              handleNext={handleNext}
              handleShowLoginDetails={() => console.log("Show login")}
            />
          )}
        </div>
      </AnimatedSection>

    </div>
  );
};

export default ProjectsOverview;
