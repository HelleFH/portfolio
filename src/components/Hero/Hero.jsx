import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images.tsx";
import Button from "../Buttons/Button.tsx";
import "./hero.scss";

const Hero = ({ title, subtitle, intro, buttons }) => {
  const navigate = useNavigate();

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const heroImage = isMobile
    ? Images.HeroImageMobile
    : Images.HeroImage400;

  return (
    <section
  className="hero mb-10  relative bg-position-[10rem] flex min-h-[65vh] md:min-h-[75vh] w-full flex-col items-start justify-center py-[5rem] overflow-hidden md:py-0 px-0 md:px-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay */}

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
