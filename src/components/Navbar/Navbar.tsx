import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images.tsx";
import SideMenu from "../SideMenu.tsx";
import SocialLinks from "../SocialLinks.tsx";
import { NavbarProps } from "../../types/navBar.ts";

const normalizeImagePath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("./")) return path.replace("./", "/");
  return path;
};

const Navbar: React.FC<NavbarProps> = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔑 Dynamic colors
  const linkColor = scrolled ? "text-[rgba(var(--white-color))]" : "text-black";
  const hoverColor = scrolled
    ? "hover:text-[rgba(var(--lightgreen))]"
    : "hover:text-[rgba(var(--darkgreen))]";
  const textColor = linkColor;
  const bgColor = scrolled
    ? "bg-black backdrop-blur-sm"
    : "md:bg-transparent bg-white/60";

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastY;

      setScrolled(forceScrolled || currentY > 50);

      if (currentY < 100) {
        setIsHidden(false);
      } else if (isScrollingDown && !menuOpen) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsHidden(true), 1500);
      } else {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        setIsHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    if (forceScrolled) setScrolled(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [menuOpen, forceScrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9995]
        flex items-center md:justify-between justify-start
        h-[7vh] min-h-[60px] md:px-6
        transition-all duration-500 ease-in-out
        ${bgColor}
        ${isHidden && !menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className={`w-full md:w-fit flex items-center gap-6 ${textColor}`}>
        {/* Logo */}
        <Link
          to="/"
          className={`flex md:items-center justify-start px-3 gap-2 font-semibold text-lg ${textColor}`}
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={normalizeImagePath(Images.FooterLogo)}
            alt="Logo"
            className={`w-9 transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-70"
            }`}
          />
          <span
            className={`navbar-link text-lg transition-colors duration-300
              ${linkColor} ${hoverColor}`}
          >
            Helle Fruergaard
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-4">
          <Link
            to="/about"
            className={`navbar-link text-lg transition-colors duration-300
              ${linkColor} ${hoverColor}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <div className="pl-2">
            <SocialLinks
              color={linkColor}
              hoverColor={hoverColor}
            />
          </div>
        </ul>

        {/* Mobile Menu placeholder */}
        <div className="ml-auto"></div>
      </div>

      {/* SideMenu */}
      <SideMenu
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "CV", href: "/CV" },
          { label: "Projects", href: "/project-overview" },
          { label: "Design & Media", href: "/media" },
        ]}
        open={menuOpen}
        setOpen={setMenuOpen}
        scrolled={scrolled}
      />
    </nav>
  );
};

export default Navbar;
