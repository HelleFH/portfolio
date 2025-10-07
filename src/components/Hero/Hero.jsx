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
    <section className="hero relative flex min-h-[75vh] w-full flex-col  items-start justify-center overflow-hidden px-16 text-[rgba(var(--white-color))]">
      
      {!videoEnded && (
        <video
          className=" absolute left-0 top-0 z-[-1] h-full w-full object-cover"
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
      <div className="relative flex w-full flex-col items-start gap-4 p-12 md:p-16">
        <p className="text-l g font-prompt -mb-3 mt-[5%] font-light">{subtitle}</p>
        <h1 className="font-inter max-w-[800px] text-5xl font-light text-[rgba(var(--white-color))] md:text-6xl">{title}</h1>
<p className="max-w-[700px] pt-2">React Developer building clean, responsive interfaces and smooth user experiences. Merging a scientific mindset with creative coding </p>
        {/* Button Container */}
        <div className="flex-rowgap-4 mt-6 flex">
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
