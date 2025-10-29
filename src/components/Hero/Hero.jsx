import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images.tsx";
import Button from "../Buttons/Button.tsx";
import "./hero.scss";

const Hero = ({ title, subtitle, intro, buttons }) => {
  const navigate = useNavigate();
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const handleButtonClick = (path) => {
    if (path) navigate(path);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
        setVideoVisible(true);
      } catch (err) {
        console.log("Autoplay blocked — keeping video hidden.");
        setVideoVisible(false);
      }
    };

    tryPlay();
  }, []);

  return (
    <section className="hero mb-10 relative flex min-h-[65vh] md:min-h-[75vh] w-full flex-col items-start justify-center py-[5rem] overflow-hidden md:py-0 px-0 md:px-16 text-[rgba(var(--white-color))]">
      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute left-0 top-0 z-[-2] h-full w-full object-cover transition-opacity duration-700 ${
          videoVisible ? "opacity-100" : "opacity-0"
        }`}
        src={Images.heroVideo}
        muted
        playsInline
        preload="auto"
        loop
        poster={Images.heroImage400}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_left,rgba(var(--darkgreen),0.2)_10%,#001800)]"></div>
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative flex w-full flex-col items-start gap-4 p-8 md:p-16">
        <p className="text-lg font-light -mb-3 mt-[5%]">{subtitle}</p>
        <h1 className="font-inter text-[rgba(var(--white-color))] max-w-[800px] text-5xl font-light md:text-6xl">
          {title}
        </h1>
        <p className="max-w-[700px] pt-2">{intro}</p>

        <div className="mt-6 flex flex-row gap-4">
          {buttons?.map(
            (button, index) =>
              button.type === "link" &&
              button.text && (
                <Button
                  key={index}
                  onClick={() => handleButtonClick(button.path)}
                  className="custom-button"
                >
                  {button.text}
                </Button>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
