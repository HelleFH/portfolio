import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

import Images from "../../assets/images.tsx";
import SideMenu from "../SideMenu.tsx";
import SocialLinks from "../SocialLinks.tsx";

// ✅ Define props properly
interface NavbarProps {
  forceScrolled?: boolean;
}

// ✅ Helper to normalize relative image paths
const normalizeImagePath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("./")) return path.replace("./", "/");
  return path;
};

const Navbar: React.FC<NavbarProps> = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const scrollTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // ✅ Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(forceScrolled || currentScrollY > 50);

      if (
        currentScrollY > lastScrollY &&
        !menuOpen &&
        currentScrollY > window.innerHeight * 0.07
      ) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => setIsHidden(true), 2000);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    if (forceScrolled) setScrolled(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [lastScrollY, menuOpen, forceScrolled]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[9995] flex h-[7vh] min-h-[60px] items-center justify-between px-6
        font-medium tracking-tight transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[rgba(54,75,68,0.95)] backdrop-blur-sm" : "bg-transparent"}
        ${isHidden && !menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="flex w-full items-center justify-between text-[rgba(var(--white-color))]">
        {/* ✅ Logo */}
        <Link
          to="/"
          className="flex items-center justify-start gap-2 text-[rgba(var(--white-color))] no-underline transition-transform duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={normalizeImagePath(Images.FooterLogo)}
            alt="Logo"
            className="w-9 opacity-[0.7]"
          />
          <span className="text-lg font-semibold navbar-link">
            Helle Fruergaard
          </span>
        </Link>

        {/* ✅ Desktop Links */}
        <ul className="hidden md:flex items-center gap-4 text-[rgba(var(--white-color))] transition-all duration-300">
          <li>
            <Link
              to="/about"
              className="mt-[3px] navbar-link rounded-md px-1 text-lg transition-colors duration-300 hover:bg-[rgba(var(--cyan))]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <div className="pr-3">
            <SocialLinks color="text-white" hoverColor="hover:text-[rgba(var(--cyan))]" />
          </div>
        </ul>

        {/* ✅ Mobile Side Menu */}
        <SideMenu
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "CV", href: "/CV" },
            { label: "Projects", href: "/project-overview" },
            { label: "Design & Media", href: "/media" },
          ]}
          open={menuOpen}
          setOpen={setMenuOpen} scrolled={false}        />
      </div>
    </nav>
  );
};

export default Navbar;
