import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import './sidemenu.scss';
import Images from "../../assets/images";

interface MenuItem {
  label: string;
  href: string;
}

interface SideMenuProps {
  items: { label: string; href: string }[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled: boolean;
}

const SideMenu = ({ items, open, setOpen, scrolled }: SideMenuProps) => {
  return (
    <div className="text-[rgba(var(--black-color))] ">
     
<button
  onClick={() => setOpen(!open)}
  className="transition-colors rounded-md duration-300 p-1  hover:text-[rgba(var(--darkgreen),0.9)]"
>
  {open ? <X size={24} color="black" className="text-[rgba(var(--black-color))] "/> : <Menu size={24} color="white" />}
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
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed  top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-[rgba(var(--white-color))] z-50 shadow-lg flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between bg-[rgba(var(--white-color))] p-4 border-b text-black">
                <img src={Images.FooterLogo} alt="Logo" className="max-w-[50px] object-contain h-auto" />
                <div className="flex text-center flex-col">
                <a className="text-2xl tracking-[-0.2rem]">Helle Fruergaard</a>
                <h6>Web Developer</h6>
                </div>
                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className=" text-black bg-[rgba(var(--white-color))] rounded-b-md shadow-xl text-[rgba(var(--black-color))]  text-center flex flex-col p-4 gap-4">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block p-4 border-b text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
