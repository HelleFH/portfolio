import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Images from "../../assets/images";
import SideMenu from "../SideMenu/SideMenu.tsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection logic to change navbar style based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout, menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9995] flex items-center justify-between px-6 h-[7vh] min-h-[60px]
        font-medium tracking-tight transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[rgba(54,75,68,0.85)] backdrop-blur-md" : "bg-transparent"}
        ${isHidden && !menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* Navbar Content */}
      <div className="flex items-center justify-between w-full text-white">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white no-underline transition-transform duration-300 hover:scale-105"
        >
          <img
            src={Images.FooterLogo}
            alt="Logo"
            className="w-9"
          />
          <span className="text-lg font-semibold">Helle Fruergaard</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-white transition-all duration-300">
          <li>
            <Link
              to="/about"
              className="px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[rgba(0,100,0,0.6)]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>

          {/* Inline Social Links */}
          <li className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </li>
        </ul>

        {/* Mobile Side Menu */}
        <SideMenu
          items={[
            { label: "Home", href: "#" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ]}
          open={menuOpen}
          setOpen={setMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
