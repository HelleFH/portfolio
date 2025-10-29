import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout.tsx";
import ProjectsOverview from "./components/ProjectOverview/ProjectOverview.tsx";
import ProjectsIntro from "./components/ProjectsIntro/ProjectsIntro.tsx";
import SkillsList from "./components/SkillsList/SkillsList.tsx";

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Helle Fruergaard | React Developer";
  }, []);

  useEffect(() => {
    const scrollToId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollToId) return;

    const tryScroll = () => {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        navigate(".", { replace: true, state: {} }); // Clear state after scroll
      } else {
        setTimeout(tryScroll, 50); // Retry until element is ready
      }
    };

    tryScroll();
  }, [location, navigate]);

  return (
    <Layout
      heroTitle="Turning ideas into interactive products."
      heroSubtitle="Helle Fruergaard | Web Developer"
      buttons={[{ type: "link", text: "Learn more", path: "/about" }]}
      heroIntro="React Developer building clean, responsive interfaces and smooth user experiences. Merging a scientific mindset with creative coding.
"
    >
      <div className="flex flex-wrap gap-4 max-w-[1600px] mx-auto">
        {/* Projects section */}
        <div className="w-full flex flex-wrap gap-1 items-start justify-center">
          <div className="max-w-[96vw] md:max-w-[25vw] mb-10">
            <SkillsList />

          </div>
          <div className=" px-4 max-w-[96vw] flex flex-col gap-4 md:max-w-[50vw]">
            <ProjectsIntro />
            <ProjectsOverview />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Home;
