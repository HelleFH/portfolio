import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images.tsx";
import Button from "../Buttons/Button.tsx";
import "./hero.scss";

const Hero = ({ title, subtitle, intro, buttons }) => {
  const navigate = useNavigate();
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleButtonClick = (path) => {
    if (path) navigate(path);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
        setVideoVisible(true); // show video only if it plays
      } catch (err) {
        console.log("Autoplay blocked — showing fallback image.");
        setVideoVisible(false);
      }
    };

    tryPlay();
  }, []);
  

 return (

<section
  className="hero mb-10 relative bg-position-[10rem] flex min-h-[60vh] md:min-h-[75vh] w-full flex-col items-start justify-center py-[5rem] overflow-hidden md:py-0 px-0 md:px-16"
  style={{
    backgroundImage: `url("${
      isMobile ? Images.HeroImageMobile : Images.HeroImage400
    }")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>


      {/* Content */}
      <div className="relative flex w-full flex-col items-start gap-4 p-8 md:p-16">
        <p className="text-lg font-light -mb-3 mt-[5%]">{subtitle}</p>
        <h1 className="font-inter text-[rgba(var(--black-color))] max-w-[800px] text-5xl font-light md:text-6xl">
          {title}
        </h1>
        <p className="max-w-[700px] pt-2">{intro}</p>

    <div className="mt-6 flex flex-row gap-4 flex-wrap">
  {buttons?.map(
    (button, index) =>
      button.type === "link" &&
      button.text && (
        <Button
          key={index}
          onClick={() => {
            if (button.external) {
              // External link → open in new tab
              window.open(button.path, "_blank");
            } else {
              // Internal link → navigate
              navigate(button.path);
            }
          }}
          className="custom-button px-6 py-2 rounded-md  transition"
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
