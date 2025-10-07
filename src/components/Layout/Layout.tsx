import React, { ReactNode } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AnimatedSection from "../AnimatedSection";
import "./Layout.scss";

interface ButtonProps {
  type: "link" | "button";
  text: string;
  path?: string;
  onClick?: () => void;
}

interface LayoutProps {
  heroTitle: string;
  heroSubtitle: string;
  buttons?: ButtonProps[];
  showContactUsButton?: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  heroTitle,
  heroSubtitle,
  buttons = [],
  children,
}) => {
  return (
    <div className="layout">
      <Navbar />
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        buttons={buttons}
      />
      <main className="layout__main-content">{children}</main>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Layout;
