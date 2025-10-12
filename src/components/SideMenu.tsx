import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Images from "../assets/images.tsx";
import SocialLinks from "./SocialLinks.tsx";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  items: MenuItem[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ items, open, setOpen }) => {
  return (
    <div className="text-[rgba(var(--black-color))]">
      {/* Burger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="burger-icon flex h-[30px] items-center rounded-md p-1 text-[#324b4b] transition-transform duration-200 hover:scale-110 hover:text-[rgba(var(--darkgreen),0.9)]"
      >
        {open ? (
          <X size={24} className="text-[rgba(var(--black-color))]" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {/* Animate menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[rgba(var(--white-color))] shadow-lg md:max-w-md"
            >
              {/* Header */}
              <div className="flex justify-between border-b bg-[rgba(var(--white-color))] p-4 text-black">
                <img
                  src={Images.FooterLogo}
                  alt="Logo"
                  className="h-auto max-w-[50px] object-contain"
                />
                <div className="flex flex-col text-center">
                  <span className="text-2xl font-['inter'] tracking-[-0.1rem]">
                    Helle Fruergaard
                  </span>
                  <h6>Web Developer</h6>
                </div>
                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="side-links flex flex-col gap-4 rounded-b-md bg-[rgba(var(--white-color))] p-4 text-center text-[#324b4b] shadow-xl">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block border-b p-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </ Link> 
                ))}

                <SocialLinks />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
