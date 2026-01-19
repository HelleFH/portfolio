import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialLinksProps } from "../types/socialLinks";

const SocialLinks: React.FC<SocialLinksProps> = ({
  onClick,
  color = "text-gray-600",
  hoverColor = "hover:text-[(var(--darkgreen))]",
  size = 20,
}) => {
  const linkBase = `m-0 w-5 transition-colors duration-200 ${color} ${hoverColor}`;

  return (
    <li className="flex items-center justify-center gap-3" onClick={onClick}>
      <Link
        to="https://www.linkedin.com/in/helle-fruergaard-577763112/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkBase}
      >
        <Linkedin size={size} />
      </ Link> 
      <Link
        to="https://github.com/HelleFH"
        target="_blank"
        rel="noopener noreferrer"
        className={linkBase}
      >
        <Github size={size} />
      </ Link> 
    </li>
  );
};

export default SocialLinks;
