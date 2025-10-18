import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout.tsx";
import ProjectsOverview from "./components/ProjectOverview.tsx";


const ProjectsAll: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Helle Fruergaard | Projects";
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
            heroTitle="My Projects"
            heroSubtitle="Helle Fruergaard | Web Developer"
            buttons={[{ type: "link", text: "Learn more", path: "/about" }]}
            heroIntro=""
        >
            <div className="flex flex-wrap gap-4 ">
                {/* Projects section */}
                    <div className="w-[96vw] mx-auto max-w-[1200px]">
                        <ProjectsOverview />
                    </div>
            </div>
        </Layout>
    );
};

export default ProjectsAll;
