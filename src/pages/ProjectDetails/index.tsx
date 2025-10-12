import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { LogIn } from "lucide-react";
import { FaArrowLeft, FaSignInAlt } from "react-icons/fa";

import Layout from "../../components/Layout.tsx";
import LoginModal from "../../components/LoginModal.tsx";
import ProjectButtons from "../../components/ProjectButtons.tsx";
import ProjectContent from "./ProjectContent.tsx";
import ProjectNavigation from "./ProjectNavigation.tsx";
import ResponsiveImage from "../../components/ResponsiveImage.tsx";
import { frontendProjects } from "../../data/frontendprojects";
import { myProjects } from "../../data/myProjects";

import "./index.scss";
import React from "react";
import Images from "../../assets/images.tsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ShowLoginButton from "../../components/Links/ShowLoginButton.tsx";

interface ResponsiveImageSet {
  400: string;
  800: string;
  1200: string;
  1600: string;
}

interface Project {
  id: number;
  name: string;
  type?: string;
  descriptionHeader: string;
  description: string;
  images: (string | ResponsiveImageSet)[];
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

  // ✅ Add `type` safely to each project
  const projectList: Project[] =
    type === "frontend"
      ? frontendProjects.map((proj) => ({ ...proj, type: "frontend" }))
      : myProjects.map((proj) => ({ ...proj, type: "myprojects" }));

  const indexFromId = projectList.findIndex(
    (proj) => proj.id === parseInt(id || "", 10)
  );

  const currentIndex =
    passedIndex !== undefined ? passedIndex : indexFromId;

  const selectedProject = projectList[currentIndex];
  const [showLoginModal, setShowLoginModal] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (!selectedProject) navigate("/404");
  }, [selectedProject, navigate]);

  const navigateToProject = (newIndex: number) => {
    const total = projectList.length;
    const wrappedIndex = (newIndex + total) % total;
    const newProject = projectList[wrappedIndex];
    navigate(`/project/${type}/${newProject.id}`, {
      state: { scrollY: window.scrollY },
    });
  };
  const [heroBg, setHeroBg] = React.useState(Images.hero[800]);

  React.useEffect(() => {
    const updateHero = () => {
      const w = window.innerWidth;
      if (w < 600) setHeroBg(Images.hero[400]);
      else if (w < 1000) setHeroBg(Images.hero[800]);
      else if (w < 1600) setHeroBg(Images.hero[1200]);
      else setHeroBg(Images.hero[1600]);
    };

    updateHero();
    window.addEventListener("resize", updateHero);
    return () => window.removeEventListener("resize", updateHero);
  }, []);


  const handlers = useSwipeable({
    onSwipedLeft: () => navigateToProject(currentIndex + 1),
    onSwipedRight: () => navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  if (!selectedProject)
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;

  // ✅ Detect if image is a string or responsive set


  return (
    <div className="relative  min-h-screen overflow-hidden" {...handlers}>
      {/* Background image */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[rgba(var(--dark-color),0.9)] via-[rgba(var(--dark-color),0.9)] to-[rgba(var(--soft),0.6)]" />

      {/* Page content */}
      <Navbar forceScrolled={true} />

      <div className="relative z-10 mx-auto  flex flex-col items-center w-full max-w-[1000px] p-6 bg-[rgba(255,255,255,0.9)] rounded-sm shadow-lg my-[7rem] transition-all hover:shadow-2xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="font-[cup-cakes] tracking-tighter flex items-center gap-2  hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300 self-start"
        >
          <FaArrowLeft size={14} /> Back to Projects
        </button>

        {/* Main Image */}
       <div className="flex justify-center mb-4 rounded-sm items-center w-full  bg-white dark:bg-gray-800 p-4">
          <picture>
            <source srcSet={selectedProject.images[0][1600]} media="(min-width: 1200px)" />
            <source srcSet={selectedProject.images[0][1200]} media="(min-width: 800px)" />
            <source srcSet={selectedProject.images[0][800]} media="(min-width: 400px)" />
            <img
              src={selectedProject.images[0][400]}
              alt={selectedProject.name}
              className="max-h-[50vh] w-auto object-contain"
              loading="lazy"
            />
          </picture>
        </div>
        <div className=" w-full p-6 rounded-sm bg-[rgba(255,255,255,0.95)]">
          {/* Project Content */}
          <ProjectContent project={selectedProject} />

          {/* Login Details */}
          {selectedProject.username && (
            <ShowLoginButton onClick={() => setShowLoginModal(true)} />
          )}

          {/* Buttons */}
          <div className="mt-6 flex w-full justify-center">
            <ProjectButtons

              projectLink={selectedProject.projectLink}
              githubLink={selectedProject.githubLink}
              buttonText={selectedProject.buttonText}
              githubButtonText={selectedProject.githubButtonText}
            />
          </div>

          {/* Navigation Arrows */}
          <ProjectNavigation
            onPrev={() => navigateToProject(currentIndex - 1)}
            onNext={() => navigateToProject(currentIndex + 1)}
          />
        </div>

        {/* Login Modal */}
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
