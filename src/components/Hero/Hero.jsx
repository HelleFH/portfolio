import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images.tsx";
import Button from "../Buttons/Button.tsx";
import "./hero.scss";

const Hero = ({ title, subtitle, intro, buttons }) => {
  const navigate = useNavigate();

  return (
    <section
      className="hero bg-[65%] md:bg-top mb-10 relative flex min-h-[65vh] w-full flex-col items-start justify-center py-[5rem] overflow-hidden md:py-0 px-4 md:px-16"
      style={{
        backgroundImage: `url(${Images.HeroImage400})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex max-w-[900px] flex-col gap-4 py-16">
        {subtitle && (
          <p className="text-lg font-light text-black">
            {subtitle}
          </p>
        )}

        <h1 className="text-5xl md:text-6xl font-light text-black">
          {title}
        </h1>

        {intro && (
          <p className="max-w-[700px] text-black">
            {intro}
          </p>
        )}

        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {buttons
              .filter((b) => b && b.path && b.text)
              .map((button, index) => (
                <Button
                  key={index}
                  className="px-6 py-2 rounded-md transition"
                  onClick={() =>
                    button.external
                      ? window.open(button.path, "_blank")
                      : navigate(button.path)
                  }
                >
                  {button.text}
                </Button>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
