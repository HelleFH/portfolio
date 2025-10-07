import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from "../../data/frontendprojects";
import { fullStackProjects } from "../../data/fullstackprojects";

interface Project {
  id: number;
  type?: string; // optional to fix missing property error
  name: string;
  descriptionHeader: string;
  description: string;
  projectDetails?: string[];
  technologiesMore?: string[];
  images: string[];
  username?: string;
  projectLink?: string;
  githubLink?: string;
  buttonText?: string;
  githubButtonText?: string;
}

interface LocationState {
  selectedProjectIndex?: number;
  projectType?: string;
  scrollTo?: string;
  scrollY?: number;
}

const ProjectDetail: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedProjectIndex: passedIndex } = (location.state as LocationState) || {};

  const projectList = type === "frontend" ? frontendProjects : fullStackProjects;
  const indexFromId = projectList.findIndex((proj) => proj.id === Number(id));
  const currentIndex = passedIndex ?? indexFromId;
  const selectedProject = projectList[currentIndex];

  const [project, setProject] = useState<Project | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

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
    navigate(`/project/${type}/${newProject.id}`, { state: { scrollY: window.scrollY } });
  };

  const handleBackToProjects = () => {
    navigate("/", { state: { selectedProjectIndex: currentIndex, projectType: type } });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateToProject(currentIndex + 1),
    onSwipedRight: () => navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  if (!selectedProject) return <p className="mt-20 text-center text-gray-600">Loading...</p>;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-50" {...handlers}>
      {/* Your existing JSX */}
    </div>
  );
};
export default ProjectDetail;
