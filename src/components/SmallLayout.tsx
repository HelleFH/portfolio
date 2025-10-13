// components/PageLayout.tsx
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar.tsx";
import Images from "../assets/images.tsx";
import { ReactNode } from "react";
import TextLink from "./Links/TextLink.tsx";
import { ArrowRight, Home } from "lucide-react";

interface SmallLayoutProps {
  children: ReactNode;
  showFooter?: boolean; // optional
}

const SmallLayout: React.FC<SmallLayoutProps> = ({ children, showFooter = true }) => {
  const [heroBg, setHeroBg] = useState(Images.hero[800]);

  useEffect(() => {
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

  return (
    <div className="relative min-h-screen">
      <Navbar forceScrolled={true} />

      {/* Fixed Hero Background */}
      <div
        className="fixed inset-0 z-[-2] bg-contain bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[rgba(var(--dark-color),0.8)] via-[rgba(var(--dark-color),0.8)] to-[rgba(var(--soft),0.6)]" />

      {/* Page content */}
      <div className="relative z-10">{children}</div>

      {/* Footer */}
      {showFooter && (
        <footer className="text-center p-12 flex flex-col justify-center items-center bg-gray-900 w-full">
          <img src={Images.FooterLogo} className="max-w-20 absolute mb-10 opacity-20" />
          <TextLink to="/project-overview" className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2" >
            <ArrowRight className="w-5 h-5 text-[rgba(var(--lightgreen))]" /> Click here for some examples of my work
          </TextLink>
          <TextLink to="/about" className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2" >
            <ArrowRight className="w-5 h-5 text-[rgba(var(--lightgreen))]" /> Click here to learn more about me </TextLink>
          <TextLink to="/" className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2" >
            <Home className="w-5 h-5 text-[rgba(var(--lightgreen))]" /> Home </TextLink>
        </footer>
      )}
    </div>
  );
};

export default SmallLayout;
