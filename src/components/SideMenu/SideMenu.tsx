import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import './sidemenu.scss'
interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  items: MenuItem[];
}

const SideMenu: React.FC<SideMenuProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="z-9 absolute p-2 rounded-lg bg-gray-900 text-white shadow-lg right-0 top-0"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6 flex flex-col"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end mb-6 p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                <X size={24} />
              </button>

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