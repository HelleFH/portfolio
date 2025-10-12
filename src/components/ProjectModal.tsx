import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight, FaSignInAlt, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProjectButtons from "./ProjectButtons.tsx";
import LoginModal from "./LoginModal.tsx";
import { Project } from "../types/project.ts";
import { skillIcons } from '../components/Pills/SkillIcons.tsx'
import ReadMoreLink from "./Links/ReadMoreLink.tsx";
import ShowLoginButton from "./Links/ShowLoginButton.tsx";

interface ProjectModalProps {
  show: boolean;
  handleClose: () => void;
  selectedProjectIndex: number | null;
  projects: Project[];
  handlePrev: () => void;
  handleNext: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  show,
  handleClose,
  selectedProjectIndex,
  projects,
  handlePrev,
  handleNext,
}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [visible, setVisible] = useState(show);
  const [animateOut, setAnimateOut] = useState(false);

  // Handle modal open/close animations
  useEffect(() => {
    if (show) {
      setVisible(true);
      setAnimateOut(false);
    } else if (visible) {
      setAnimateOut(true);
      const timer = setTimeout(() => setVisible(false), 250); // match fadeOut duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleShowLoginDetails = () => setShowLoginModal(true);
  const handleHideLoginDetails = () => setShowLoginModal(false);

  if (selectedProjectIndex === null || !projects[selectedProjectIndex]) return null;

  const project = projects[selectedProjectIndex];

  const technologiesArray: string[] = Array.isArray(project.technologiesMore)
    ? project.technologiesMore
    : project.technologiesMore
      ? project.technologiesMore.split(",").map((t) => t.trim())
      : [];

  return visible ? (
    <div
      className={`fixed inset-0 z-[9997] flex items-center justify-center bg-black/50 ${animateOut ? "animate-fadeOut" : "animate-fadeIn"
        }`}
    >
      <div
        {...swipeHandlers}
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[95vw] max-w-4xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 transform ${animateOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Chevron Left */}
        <div
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full cursor-pointer transition-transform duration-150 hover:scale-105"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        {/* Image */}
        <div className="flex justify-center items-center w-full md:w-1/2 bg-white dark:bg-gray-800 p-4">
          <picture>
            <source srcSet={project.images[0][1600]} media="(min-width: 1200px)" />
            <source srcSet={project.images[0][1200]} media="(min-width: 800px)" />
            <source srcSet={project.images[0][800]} media="(min-width: 400px)" />
            <img
              src={project.images[0][400]}
              alt={project.name}
              className="max-h-[300px] w-auto object-contain"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Chevron Right */}
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full cursor-pointer transition-transform duration-150 hover:scale-105"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-4 w-full md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            {project.name}
          </h2>
          <p className="hidden md:block text-gray-600 dark:text-gray-300 max-w-md">
            {project.descriptionHeader}
          </p>

          {/* Tech list */}
          <ul className="font-['lato'] flex flex-wrap gap-2 mt-2">
            {technologiesArray.map((tech, i) => {
              const icon = skillIcons[tech] || <FaTools />;
              return (
                <li
                  key={i}
            className="flex items-center gap-2 rounded-lg bg-[rgba(var(--lightgreen),0.3)] font-['cup-cakes'] text-sm text-black px-3 py-1 shadow-sm transition hover:bg-indigo-100"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {tech}
                  </span>
                </li>
              );
            })}
          </ul>

          <ProjectButtons
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            buttonText={project.buttonText}
            githubButtonText={project.githubButtonText}
          />

          {/* Links */}
          <div className="flex items-center flex-row justify-center gap-4 mt-4 dark:text-gray-200">
            <Link
              to={`/project/${project.type}/${project.id}`}
              state={{ selectedProjectIndex, projectType: project.type }}
            >
              <ReadMoreLink fontColor="rgba(var(--cyan))">
                Read More
              </ReadMoreLink>
            </Link>

            {project.username && (
              <ShowLoginButton onClick={() => setShowLoginModal(true)} />

            )}
          </div>
        </div>

        {/* Login modal */}
        <LoginModal
          show={showLoginModal}
          onHide={handleHideLoginDetails}
          project={project}
          backdropClassName="login-modal-backdrop"
          dialogClassName="project-login-modal"
          handleCopyToClipboard={(text) => {
            navigator.clipboard.writeText(text);
            alert("Copied to clipboard");
          }}
        />
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
