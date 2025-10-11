import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import ProjectButtons from "../ProjectButtons/ProjectButtons.jsx";
import { Link } from "react-router-dom";
import "./ProjectModal.scss";
import { FaArrowRight, FaSignInAlt, FaTools } from "react-icons/fa";
import CloseButton from "../Buttons/CloseButton.tsx";
import LoginModal from '../../components/LoginModal/LoginModal.tsx'
import { Project } from "../../types/project.js";
import { skillIcons } from "../../pages/index/components/SkillsList/SkillIcons.tsx";


interface ProjectModalProps {
  show: boolean;
  handleClose: () => void;
  selectedProjectIndex: number | null;
  projects: Project[];
  handlePrev: () => void;
  handleNext: () => void;
  handleShowLoginDetails?: () => void;
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true, // ✅ fixed here
    trackMouse: true,
  });

  const handleShowLoginDetails = () => setShowLoginModal(true);
  const handleHideLoginDetails = () => setShowLoginModal(false);

  if (selectedProjectIndex === null || !projects[selectedProjectIndex]) {
    return null;
  }

  const project = projects[selectedProjectIndex];
const technologiesArray: string[] = Array.isArray(project.technologies)
  ? project.technologies
  : project.technologies
  ? project.technologies.split(",").map((t) => t.trim())
  : [];
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Dialog className="login-modal-dialog fade-in">
        <Modal.Body {...swipeHandlers} className="modal-body-custom">
          <CloseButton onClick={handleClose} />

          <div className="chevron chevron-left" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </div>

          <div className="modal-image-container">
            <img
              className="modal-image"
              src={project.images[0]}
              alt={project.name}
            />
          </div>

          <div className="chevron chevron-right" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>

          <div className="modal-content-container">
            <h2 className="modal-title">{project.name}</h2>
            <p className="project-description">{project.descriptionHeader}</p>

<ul className="flex flex-wrap gap-2 mt-4">
  {technologiesArray.map((tech, i) => {
    const icon = skillIcons[tech] || <FaTools />;
    return (
      <li
        key={i}
        className="flex items-center gap-2 bg-white/10 dark:bg-white/5 px-3 py-1.5 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {tech}
        </span>
      </li>
    );
  })}
</ul>



            {project && (
              <ProjectButtons
                projectLink={project.projectLink}
                githubLink={project.githubLink}
                buttonText={project.buttonText}
                githubButtonText={project.githubButtonText}
              />
            )}

            <div className="links-container">
      <Link
  to={`/project/${project.type}/${project.id}`}
  state={{
    selectedProjectIndex,
    projectType: project.type,
  }}
>

  Read More <FaArrowRight size={14} />
</Link>

              {project.username && (
                <a onClick={handleShowLoginDetails} className="login-link">
                  <FaSignInAlt size={14} /> Show Login Details
                </a>
              )}
            </div>

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
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default ProjectModal;
