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
import CVPage from "./pages/ExperienceReveal/index.tsx";

import "./index.css";
import ProjectsAll from "./pages/ProjectsAll/index.tsx";
import DesignAndMedia from "./pages/DesignAndMedia/index.jsx";

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
          path="/media"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <DesignAndMedia />
            </motion.div>
          }
        />
        <Route
          path="/projects/:name"
          element={<ProjectDetail />}
        />
          <Route
          path="/CV"
          element={<CVPage />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function AnimatedApp(): JSX.Element {
  return (
    <Router
    >
      <App />
    </Router>
  );
}
