import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Images from "../assets/images.tsx";
import SocialLinks from "./SocialLinks.tsx";
import { Link } from "react-router-dom";
import { SideMenuProps } from "../types/sideMenu.ts";

const SideMenu: React.FC<SideMenuProps> = ({scrolled, items, open, setOpen }) => {
  
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      {/* Burger Icon */}
   <button
  onClick={() => setOpen(!open)}
  className={`
    burger-icon flex h-[32px] items-center rounded-full p-1
    transition-all duration-300 hover:scale-110 pr-3
    ${scrolled
      ? "bg-transparent text-[rgba(var(--white-color))] "
      : "bg-[rgba(var(--white-color),0.6)] text-black"}
  `}
>
  {open ? <X size={24} /> : <Menu size={24} />}
</button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Side Menu */}
            <motion.aside
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="
                fixed right-0 top-0 z-50
                h-screen w-[85vw] max-w-sm
                bg-[rgba(var(--white-color))] shadow-2xl
                overflow-y-auto
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 border-b p-4">
                <img
                  src={Images.FooterLogo}
                  alt="Logo"
                  className="w-12"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    Helle Fruergaard
                  </span>
                  <span className="text-sm text-gray-600">
                    Web Developer
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Content */}
              <div className="flex min-h-[calc(100vh-80px)] flex-col justify-between p-6">
                {/* Links */}
                <nav>
                  <ul className="flex flex-col gap-2">
                    {items.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block rounded-md px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-100"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Socials */}
                <div className="pt-8">
                  <SocialLinks />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
