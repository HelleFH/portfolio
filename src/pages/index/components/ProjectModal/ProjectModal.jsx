import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import ProjectButtons from '../../../../components/ProjectButtons/ProjectButtons';
import { Link } from 'react-router-dom';
import './ProjectModal.scss';
import { FaArrowRight, FaSignInAlt } from "react-icons/fa";
import CloseButton from '../../../../components/Buttons/CloseButton.tsx';
import LoginModal from '../../../../components/LoginModal/LoginModal';

const ProjectModal = ({
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
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleShowLoginDetails = () => {
    setShowLoginModal(true);
  };

  const handleHideLoginDetails = () => {
    setShowLoginModal(false);
  };

  if (selectedProjectIndex === null || !projects[selectedProjectIndex]) {
    return null;
  }

  const project = projects[selectedProjectIndex];
  const technologies = project.technologies || '';

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Dialog className="login-modal-dialog fade-in">
        <Modal.Body {...swipeHandlers} className="modal-body-custom">
          <CloseButton   onClick={handleClose}/>


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

              <ul className="technologies-list">
                {technologies.split(',').map((tech, i) => (
                  <li className="tech-item" key={i}>
                    {tech.trim()}
                  </li>
                ))}
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
    to={{
      pathname: `/project/${project.type}/${project.id}`,
      state: { selectedProjectIndex, projectType: project.type },
    }}
  >
    Read More <FaArrowRight size={14} />
  </Link>

  {project.username && (
    <a onClick={handleShowLoginDetails}>
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
                alert('Copied to clipboard');
              }}
            />
          </div>

        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default ProjectModal;
