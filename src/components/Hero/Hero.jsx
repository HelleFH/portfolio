import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images";
import Button from '../Buttons/Button.tsx'
import './hero.scss'

const Hero = ({ title, subtitle, buttons }) => {
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);

  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className="w-full relative flex flex-col justify-center items-start  px-16 min-h-[75vh] text-[rgba(var(--white-color))] overflow-hidden hero">
      
      {!videoEnded && (
        <video
          className=" absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={Images.heroVideo}
          autoPlay
          muted
          playsInline
          onEnded={(e) => {
            e.target.pause();
            e.target.currentTime = e.target.duration;
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative flex flex-col gap-4 items-start w-full p-12 md:p-16">
        <p className="mt-[5%] -mb-3 font-light text-l g font-prompt">{subtitle}</p>
        <h1 className="max-w-[800px] text-5xl md:text-6xl font-light font-inter">{title}</h1>
<p className="max-w-[700px] pt-2">React Developer building clean, responsive interfaces and smooth user experiences. Merging a scientific mindset with creative coding </p>
        {/* Button Container */}
        <div className="flex flex-rowgap-4 mt-6">
          {buttons &&
            buttons.map((button, index) => (
              <React.Fragment key={index}>
                {button.type === "link" && button.text && (
                  <Button
                    onClick={() => handleButtonClick(button.path)}
                    className="custom-button"
                  >
                    {button.text}
                  </Button>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
