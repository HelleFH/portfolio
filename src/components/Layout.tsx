import React, { ReactNode } from "react";
import Hero from "./Hero/Hero.tsx";
import Navbar from "./Navbar/Navbar.tsx";
import Footer from "./Footer.tsx";
import AnimatedSection from "./AnimatedSection";
import { LayoutProps } from "../types/layout.ts";
import { ButtonConfig } from "../types/buttonConfig.ts";


const Layout: React.FC<LayoutProps> = ({
  heroTitle,
  heroSubtitle,
  heroIntro,
  buttons = [],
  children,
  
}) => {
  return (
    <div className="flex min-h-screen flex-col justify-start relative mx-auto">
      <Navbar />
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        intro={heroIntro}
        buttons={buttons}
      />
      <main className="w-full mx-auto box-border flex-grow px-0 md:px-4">
        {children}
      </main>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Layout;
