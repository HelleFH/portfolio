import React from "react";
import "./EmbedCard.scss";

const EmbedCard = ({ type, title, src, link }) => {
  return (
    <div className="embed-card">
      {type === "video" || type === "figma" ? (
        <div className="iframe-container">
          <iframe
            loading="lazy"
            src={src}
            title={title}
            allow="fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={title} className="image-preview" />
        </a>
      )}
      <a href={link} target="_blank" rel="noopener noreferrer" className="title">
        {title}
      </a>
    </div>
  );
};

export default EmbedCard;
