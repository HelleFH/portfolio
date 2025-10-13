import React from "react";
import Images from "../assets/images.tsx";
import SocialLinks from "./SocialLinks.tsx";
import { Link } from "react-router-dom";
import TextLink from "./Links/TextLink.tsx";
import { ArrowRight } from "lucide-react";

const SmallFooter: React.FC = () => {
  return (
             <footer className="text-center flex flex-col justify-center items-center py-20 bg-gray-900 w-full">
            <img src={Images.FooterLogo} className="max-w-20 absolute mb-10 opacity-20" />
       {[
    { to: "/project-overview", text: "Click here for some examples of my work" },
    { to: "/about", text: "Click here to learn more about me" },
    { to: "/", text: "Home" },
  ].map((link, i) => (
    <TextLink
      key={i}
      to={link.to}
      className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2 hover:text-[rgba(var(--lightgreen))] transition"
    >
      <ArrowRight className="w-5 h-5 text-[rgba(var(--lightgreen))]" />
      {link.text}
    </TextLink>
  ))}
          </footer>
  );
};

export default SmallFooter;
