import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from '../../data/frontendprojects';
import { fullStackProjects } from '../../data/fullstackprojects';
import Layout from '../../components/Layout/Layout';
import ProjectButtons from "../../components/ProjectButtons/ProjectButtons";
import './index.scss';
import { ArrowRight, LogIn } from "lucide-react";


const ProjectDetail = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get passed index from router state (if available)
  const { selectedProjectIndex: passedIndex, projectType } = location.state || {};

  // Determine the project list based on the type
  const projectList = type === 'frontend' ? frontendProjects : fullStackProjects;

  // Find index from URL param
  const indexFromId = projectList.findIndex(proj => proj.id === parseInt(id, 10));

  // Use passed index if available, otherwise use index from URL
  const currentIndex = passedIndex !== undefined ? passedIndex : indexFromId;
  const selectedProject = projectList[currentIndex];

  const [project, setProject] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (!selectedProject) {
      navigate('/404');
    }
  }, [selectedProject, navigate]);

  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject);
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    }
  }, [selectedProject]);

  const navigateToProject = (newIndex) => {
    const total = projectList.length;
    const wrappedIndex = (newIndex + total) % total;
    const newProject = projectList[wrappedIndex];

    navigate(`/project/${type}/${newProject.id}`, {
      state: { scrollY: window.scrollY }
    });
  };

  const handleHideLoginDetails = () => setShowLoginModal(false);
  const handleShowLoginDetails = () => setShowLoginModal(true);

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateToProject(currentIndex + 1),
    onSwipedRight: () => navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  const handleBackToProjects = () => {
    navigate('/', {
      state: { selectedProjectIndex: currentIndex, projectType: type }
    });
  };

  if (!selectedProject) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-container project-details" {...handlers}>
      <Layout
        heroTitle={selectedProject.name}
        heroSubtitle={selectedProject.descriptionHeader}
      >
        <a onClick={handleBackToProjects} className="back-button">
          Back to Projects
        </a>

        <div className="project-details-container">
          <div className="image-wrapper">
            <img
              src={selectedProject.images[0]}
              alt={selectedProject.name}
              className="project-image"
            />
          </div>

          <div className="project-text">
            <h4>{selectedProject.descriptionHeader}</h4>
            <p>{selectedProject.description}</p>

            {selectedProject.projectDetails && (
              <>
                <h4>Project Features</h4>
                <ul className="project-details-list">
                  {selectedProject.projectDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </>
            )}

            <h4>Technologies Used</h4>
            <ul className="technologies-list">
              {selectedProject.technologiesMore?.map((tech, index) => (
                <li key={index} className="tech-item">{tech}</li>
              ))}
            </ul>
          </div>
  {project && (

            <div className="links-container">


              {/* Show login details */}
              {project.username && (
                <a onClick={handleShowLoginDetails} className="link-with-icon">
                  <LogIn size={16} /> Show Login Details
                </a>
              )}
            </div>
          )}
          {project && (
            <ProjectButtons
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              buttonText={project.buttonText}
              githubButtonText={project.githubButtonText}
            />
          )}
        
          {/* Navigation chevrons */}
          <div className="navigation-buttons">
            <button
              className="nav-button nav-button--prev"
              onClick={() => navigateToProject(currentIndex - 1)}
              aria-label="Previous Project"
            >
              &#x2039;
            </button>
            <button
              className="nav-button nav-button--next"
              onClick={() => navigateToProject(currentIndex + 1)}
              aria-label="Next Project"
            >
              &#x203A;
            </button>

          </div>

        </div>



        <LoginModal
          show={showLoginModal}
          onHide={handleHideLoginDetails}
          selectedProjectIndex={currentIndex}
          project={project}
          backdropClassName="login-modal-backdrop"
          dialogClassName="project-login-modal"
          handleCopyToClipboard={(text) => {
            navigator.clipboard.writeText(text);
            alert('Copied to clipboard');
          }}
        />
      </Layout>
    </div>
  );
};

export default ProjectDetail;
