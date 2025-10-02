import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/index';
import ProjectDetail from './pages/ProjectDetails';
import AboutMePage from './pages/about-me';
import './index.css';

function App() {
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




        <Route path="/project/:type/:id" element={<ProjectDetail />} />

      </Routes>
    </AnimatePresence>
  );
}

export default function AnimatedApp() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/myPortfolio' : ''}>
      <App />
    </Router>
  );
}