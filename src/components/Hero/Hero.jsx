import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './hero.scss';
import Images from "../../assets/images";
import Button from "../Buttons/Button.tsx";

const Hero = ({ title, subtitle, buttons }) => {
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);

  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className="hero">
   
      {!videoEnded && (
        <video
          className="hero__video"
          src={Images.heroVideo}
          autoPlay
          muted
          playsInline
          onEnded={(e) => {
            e.target.pause();   // stop playback
            e.target.currentTime = e.target.duration; // make sure it stays on last frame
          }}
        />

      )}

      <div className="hero__content">
        <div className="hero-title__container">
                    <p className="hero__subtitle">{subtitle}</p>

          <h1 className="hero__title">{title}</h1>
        </div>

        {/* Hero Button Container */}
        <div className="hero__button-container">
          {buttons && buttons.map((button, index) => (
            <React.Fragment key={index}>
              {button.type === 'link' && button.text && (
                <Button
                  onClick={() => handleButtonClick(button.path)}
                  className="hero__button"
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
