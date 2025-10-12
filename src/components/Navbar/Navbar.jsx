import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Images from "../../assets/images.tsx";
import SideMenu from "../SideMenu.tsx";
import SocialLinks from "../SocialLinks.tsx";

const Navbar = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection logic to change navbar style based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(forceScrolled || currentScrollY > 50);

      if (
        currentScrollY > lastScrollY &&
        !menuOpen &&
        currentScrollY > window.innerHeight * 0.07
      ) {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        const timeoutId = setTimeout(() => setIsHidden(true), 2000);
        setScrollTimeout(timeoutId);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Run immediately if forceScrolled
    if (forceScrolled) setScrolled(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout, menuOpen, forceScrolled]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[9995] flex h-[7vh] min-h-[60px] items-center justify-between px-6
        font-medium tracking-tight transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[rgba(54,75,68,0.95)] backdrop-blur-sm" : "bg-transparent"}
        ${isHidden && !menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* Navbar Content */}
      <div className="flex w-full items-center justify-between text-[rgba(var(--white-color))]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-start gap-2 text-[rgba(var(--white-color))] no-underline transition-transform duration-300 "
        >
          <img
            src={Images.FooterLogo}
            alt="Logo"
            className="w-9 opacity-[0.7]"
          />
          <span className="text-lg font-semibold navbar-link">Helle Fruergaard</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-4 text-[rgba(var(--white-color))] transition-all duration-300 md:flex">
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

        {/* Mobile Side Menu */}
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
        />
      </div>
    </nav>
  );
};

export default Navbar;
