import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft } from "react-icons/fa";
import LoginModal from "../../components/LoginModal.tsx";
import ProjectContent from "./components/ProjectContent.tsx";
import ProjectNavigation from "./components/ProjectNavigation.tsx";
import { projects } from "../../data/frontendprojects.js";

import "./index.scss";
import Images from "../../assets/images.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import ShowLoginButton from "../../components/Links/ShowLoginButton.tsx";
import { LocationState } from "../../types/locationState.ts";
import { Project } from "../../types/project.ts";
import { ResponsiveImageSet } from "../../types/responsiveImageSet.ts";

const normalizeImagePath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("./")) return path.replace("./", "/");
  return path;
};

const ProjectDetail: React.FC = () => {
  const { name   } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedProjectIndex: passedIndex, from } =
    (location.state as LocationState) || {};

  // ✅ Single unified project list
  const projectList: Project[] = projects;
    const decodedName = decodeURIComponent(name || "").toLowerCase();


const indexFromName = projectList.findIndex(
  (proj) => proj.name.toLowerCase() === decodedName
);


const currentIndex = passedIndex !== undefined ? passedIndex : indexFromName;
const selectedProject = projectList[currentIndex];

  const [showLoginModal, setShowLoginModal] = useState(false);

  // ✅ Hero background image responsive
  const [heroBg, setHeroBg] = useState<string>(normalizeImagePath(Images.hero[800]));

  useEffect(() => {
    const updateHero = () => {
      const w = window.innerWidth;
      if (w < 600) setHeroBg(normalizeImagePath(Images.hero[400]));
      else if (w < 1000) setHeroBg(normalizeImagePath(Images.hero[800]));
      else if (w < 1600) setHeroBg(normalizeImagePath(Images.hero[1200]));
      else setHeroBg(normalizeImagePath(Images.hero[1600]));
    };
    updateHero();
    window.addEventListener("resize", updateHero);
    return () => window.removeEventListener("resize", updateHero);
  }, []);

  const navigateToProject = (newIndex: number) => {
    const total = projectList.length;
    const wrappedIndex = (newIndex + total) % total;
    const newProject = projectList[wrappedIndex];
    navigate(`/projects/${newProject.name}`, {
      state: { scrollY: window.scrollY },
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateToProject(currentIndex + 1),
    onSwipedRight: () => navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  // Scroll restoration
  useEffect(() => {
    const state = location.state as { scrollY?: number };
    if (state?.scrollY) {
      setTimeout(() => window.scrollTo(0, state.scrollY || 0), 100);
    }
  }, [location.state]);

  // Redirect if project not found
  useEffect(() => {
    if (!selectedProject) navigate("/404");
  }, [selectedProject, navigate]);

  if (!selectedProject)
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;

  return (
    <div className="relative min-h-screen overflow-hidden" {...handlers}>
      {/* Background */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <Navbar forceScrolled={true} />
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[rgba(var(--dark-color),0.9)] via-[rgba(var(--dark-color),0.9)] to-[rgba(var(--soft),0.6)]" />

      <div className="relative z-10 mx-auto flex flex-col items-center w-full max-w-[1000px] p-6 bg-[rgba(255,255,255,0.9)] rounded-sm shadow-xs my-[7rem] transition-all hover:shadow-2xl">
        {/* Back Button */}
        <button
          onClick={() => {
            if (from) navigate(from);
            else navigate("/"); // fallback
          }}
          className="font-[cup-cakes] tracking-tighter flex items-center gap-2 hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300 self-start"
        >
          <FaArrowLeft size={14} /> Back to Projects
        </button>

        {/* Main Image */}
        <div className="flex justify-center mb-4 rounded-sm items-center w-full bg-white dark:bg-gray-800 p-4">
          <picture>
            <source
              srcSet={normalizeImagePath(
                (selectedProject.images[0] as ResponsiveImageSet)[1600]
              )}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={normalizeImagePath(
                (selectedProject.images[0] as ResponsiveImageSet)[1200]
              )}
              media="(min-width: 800px)"
            />
            <source
              srcSet={normalizeImagePath(
                (selectedProject.images[0] as ResponsiveImageSet)[800]
              )}
              media="(min-width: 400px)"
            />
            <img
              src={normalizeImagePath(
                (selectedProject.images[0] as ResponsiveImageSet)[400]
              )}
              alt={selectedProject.name}
              className="max-h-[50vh] w-auto object-contain"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="w-full rounded-sm bg-[rgba(255,255,255,0.95)]">
          <ProjectContent project={selectedProject} />

          {selectedProject.username && (
            <ShowLoginButton onClick={() => setShowLoginModal(true)} />
          )}

          <ProjectNavigation
            onPrev={() => navigateToProject(currentIndex - 1)}
            onNext={() => navigateToProject(currentIndex + 1)}
          />
        </div>

        <LoginModal
          show={showLoginModal}
          onHide={() => setShowLoginModal(false)}
          project={selectedProject}
          handleCopyToClipboard={(text: string) => {
            navigator.clipboard.writeText(text);
            alert("Copied to clipboard");
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
