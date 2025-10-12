import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  Menu, X } from "lucide-react";
import './sidemenu.scss';
import Images from "../../assets/images.tsx";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";

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
  className="rounded-md p-1 transition-colors duration-300  hover:text-[rgba(var(--darkgreen),0.9)]"
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
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed  right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[rgba(var(--white-color))] shadow-lg md:max-w-md"
            >
              {/* Header */}
              <div className="flex justify-between border-b bg-[rgba(var(--white-color))] p-4 text-black">
                <img src={Images.FooterLogo} alt="Logo" className="h-auto max-w-[50px] object-contain" />
                <div className="flex flex-col text-center">
                <a className="text-2xl tracking-[-0.2rem]">Helle Fruergaard</a>
                <h6>Web Developer</h6>
                </div>
                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
                
              </div>
         

              <div className=" flex flex-col gap-4 rounded-b-md bg-[rgba(var(--white-color))]  p-4 text-center text-[rgba(var(--black-color))] text-black shadow-xl">
               
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block border-b p-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                         <SocialLinks onClick={undefined} />
              </div>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
