import React from "react";
import { Github, Linkedin } from "lucide-react";

interface SocialLinksProps {
  onClick?: () => void;
  color?: string;       // base icon color
  hoverColor?: string;  // hover icon color
  size?: number;        // optional icon size
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  onClick,
  color = "text-gray-600",
  hoverColor = "hover:text-green-700",
  size = 20,
}) => {
  const linkBase = `m-0 w-5 transition-colors duration-200 ${color} ${hoverColor}`;

  return (
    <li className="flex items-center justify-center gap-3" onClick={onClick}>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={linkBase}
      >
        <Linkedin size={size} />
      </a>
      <a
        href="https://github.com/HelleFH"
        target="_blank"
        rel="noopener noreferrer"
        className={linkBase}
      >
        <Github size={size} />
      </a>
    </li>
  );
};

export default SocialLinks;
