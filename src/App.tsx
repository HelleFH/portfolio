import React, { JSX, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Location,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/index/index.tsx";
import ProjectDetail from "./pages/ProjectDetails/index.tsx";
import AboutMePage from "./pages/about-me";
import ExperienceReveal from "./pages/ExperienceReveal/ExperienceReveal.tsx";
import Projects from "./pages/projects/index.tsx";

import "./index.css";
import ProjectsAll from "./pages/ProjectsAll/index.tsx";

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <AboutMePage />
            </motion.div>
          }
        />
           <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          }
        />
   <Route
          path="/project-overview"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectsAll />
            </motion.div>
          }
        />
        <Route
          path="/project/:type/:id"
          element={<ProjectDetail />}
        />
          <Route
          path="/CV"
          element={<ExperienceReveal />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function AnimatedApp(): JSX.Element {
  return (
    <Router
      basename={process.env.NODE_ENV === "production" ? "/myPortfolio" : ""}
    >
      <App />
    </Router>
  );
}
