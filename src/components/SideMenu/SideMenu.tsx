import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import './sidemenu.scss';
import CloseButton from "../Buttons/CloseButton.tsx";
interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  items: MenuItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ items, open, setOpen }) => {

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="z-9 absolute p-2 rounded-lg text-white right-10"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence >
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/10 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="side-links absolute h-dvh top-0 right-0 w-64 bg-white shadow-xl z-50 p-6 flex flex-col"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
             
    
                <CloseButton  onClick={() => setOpen(false)} />
          

              <nav className="flex flex-col gap-4 text-lg">
                {items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;