import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LoginModal from "../../components/LoginModal/LoginModal.tsx";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from "../../data/frontendprojects";
import { myProjects } from "../../data/myProjects";
import Layout from "../../components/Layout/Layout.tsx";
import ProjectButtons from "../../components/ProjectButtons/ProjectButtons";
import { LogIn } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import "./index.scss";

interface Project {
  id: number;
  name: string;
  type: string;
  descriptionHeader: string;
  description: string;
  images: string[];
  projectDetails?: string[];
  technologiesMore?: string[];
  projectLink?: string;
  githubLink?: string;
  buttonText?: string;
  githubButtonText?: string;
  username?: string;
}

interface LocationState {
  selectedProjectIndex?: number;
  projectType?: string;
  scrollY?: number;
}

const ProjectDetail: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedProjectIndex: passedIndex } =
    (location.state as LocationState) || {};

  const projectList: Project[] =
    type === "frontend" ? frontendProjects : myProjects;

  const indexFromId = projectList.findIndex(
    (proj) => proj.id === parseInt(id || "", 10)
  );

  const currentIndex =
    passedIndex !== undefined ? passedIndex : indexFromId;

  const selectedProject = projectList[currentIndex];

  const [project, setProject] = useState<Project | null>(null);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    if (!selectedProject) navigate("/404");
  }, [selectedProject, navigate]);

  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject);
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    }
  }, [selectedProject]);

  const navigateToProject = (newIndex: number) => {
    const total = projectList.length;
    const wrappedIndex = (newIndex + total) % total;
    const newProject = projectList[wrappedIndex];

    navigate(`/project/${type}/${newProject.id}`, {
      state: { scrollY: window.scrollY },
    });
  };

  const handleBackToProjects = () => {
    navigate("/", {
      state: { selectedProjectIndex: currentIndex, projectType: type },
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateToProject(currentIndex + 1),
    onSwipedRight: () => navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  if (!selectedProject)
    return (
      <p className="text-center mt-20 text-gray-600">Loading...</p>
    );

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50"
      {...handlers}
    >
      <Layout
        heroTitle={selectedProject.name}
        heroSubtitle={selectedProject.descriptionHeader}
      >
        <div className="mx-auto relative flex flex-col items-center w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg mt-[-6rem] z-10 transition-all hover:shadow-2xl">
          {/* Back Button */}
          <button
            onClick={handleBackToProjects}
            className="font-[cup-cakes] tracking-tighter flex items-center gap-2 text-gray-600 hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300 self-start"
          >
            <FaArrowLeft size={14} /> Back to Projects
          </button>

          {/* Image */}
          <div className="w-full max-w-2xl overflow-hidden rounded-lg shadow-md mt-4">
            <img
              src={selectedProject.images[0]}
              alt={selectedProject.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-5 text-gray-800 text-left w-full mt-6">
            <h4 className="text-2xl font-semibold">
              {selectedProject.descriptionHeader}
            </h4>
            <p className="text-lg leading-relaxed">
              {selectedProject.description}
            </p>

            {selectedProject.projectDetails && (
              <>
                <h4 className="text-center text-xl font-semibold mt-4">
                  Project Features
                </h4>
                <ul className="mx-auto list-none pl-0 space-y-2">
                  {selectedProject.projectDetails.map((detail, index) => (
                    <li
                      key={index}
                      className="relative pl-6 text-gray-700 before:content-['✦'] before:absolute before:left-0 before:text-teal-500"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 className="mx-auto text-xl font-semibold mt-4">
              Technologies Used
            </h4>
            <ul className="mx-auto flex flex-wrap gap-3 font-semibold uppercase text-gray-700 text-sm">
              {selectedProject.technologiesMore?.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center after:content-['•'] after:mx-2 last:after:content-none"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Login Details */}
          {project?.username && (
            <div
              className="flex items-center gap-2 mt-6 text-[rgba(var(--darkgreen))]-700 hover:text-[rgba(var(--darkgreen))]-900 cursor-pointer"
              onClick={() => setShowLoginModal(true)}
            >
              <LogIn size={18} /> Show Login Details
            </div>
          )}

          {/* Buttons */}
          {project && (
            <div className="mt-6">
              <ProjectButtons
                projectLink={project.projectLink}
                githubLink={project.githubLink}
                buttonText={project.buttonText}
                githubButtonText={project.githubButtonText}
              />
            </div>
          )}

          {/* Project Navigation */}
          <div className="flex justify-between w-full mt-8 text-4xl text-gray-700">
            <button
              onClick={() => navigateToProject(currentIndex - 1)}
              className="hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300"
              aria-label="Previous Project"
            >
              &#x2039;
            </button>
            <button
              onClick={() => navigateToProject(currentIndex + 1)}
              className="hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300"
              aria-label="Next Project"
            >
              &#x203A;
            </button>
          </div>
        </div>

        {/* Login Modal */}
        <LoginModal
          show={showLoginModal}
          onHide={() => setShowLoginModal(false)}
          selectedProjectIndex={currentIndex}
          project={project}
          handleCopyToClipboard={(text: string) => {
            navigator.clipboard.writeText(text);
            alert("Copied to clipboard");
          }}
        />
      </Layout>
    </div>
  );
};

export default ProjectDetail;
