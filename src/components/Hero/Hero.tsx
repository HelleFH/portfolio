import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Images from "../../assets/images.tsx";
import Button from "../Buttons/Button.tsx";
import { ButtonConfig } from "../../types/buttonConfig.ts";

import "./hero.scss";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface HeroProps {
  title: string;
  subtitle?: string;
  intro?: string;
  buttons?: ButtonConfig[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  intro,
  buttons,
}) => {
  const navigate = useNavigate();

  return (
    <section
      className="hero mb-10 md:bg-top bg-[65%] relative flex min-h-[65vh] w-full flex-col items-start justify-center py-[5rem] overflow-hidden px-4 md:px-16"
      style={{
        backgroundImage: `url(${Images.HeroImage400})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex max-w-[900px] flex-col gap-4 py-16">
        {subtitle && (
          <p className="text-lg font-light text-black">{subtitle}</p>
        )}

        <h1 className="text-5xl md:text-6xl font-light text-black">
          {title}
        </h1>

        {intro && (
          <p className="max-w-[700px] text-black">{intro}</p>
        )}

        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                className="px-6 py-2 rounded-md transition flex items-center gap-2"
                onClick={() =>
                  button.external
                    ? window.open(button.path, "_blank", "noopener,noreferrer")
                    : navigate(button.path)
                }
              >


                <span>{button.text}</span>
                {button.icon === "github" && (
                  <FiGithub className="text-sm" />
                )}

                {button.icon === "link" && (
                  <FiExternalLink className="text-sm" />
                )}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
