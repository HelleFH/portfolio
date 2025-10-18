import React from "react";
import ResponsiveImage from "../../../components/ResponsiveImage.tsx";
import { Link } from "react-router-dom";
import { EmbedCardProps } from "../../../types/embedCard.ts";
import { ResponsiveSrc } from "../../../types/resposiveSrc.ts";


const EmbedCard: React.FC<EmbedCardProps> = ({ type, title, src, link }) => {
  const isResponsiveImage = typeof src !== "string";

  return (
    <div className="flex flex-col justify-between w-full">
      {type === "video" || type === "figma" ? (
        <div className="relative w-full pt-[100%] mb-4"> {/* 16:9 aspect ratio */}
          <iframe
            loading="lazy"
            src={src as string}
            title={title}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      ) : (
        <Link to={link} target="_blank" rel="noopener noreferrer" className="mb-4">
          {isResponsiveImage ? (
            <ResponsiveImage
              imageSet={src as ResponsiveSrc}
              alt={title}
              className="w-full object-contain rounded-lg shadow-md"
            />
          ) : (
            <img
              src={src as string}
              alt={title}
              className="w-full object-contain rounded-lg shadow-md"
            />
          )}
        </ Link> 
      )}
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-gray-800 hover:underline"
      >
        {title}
      </ Link> 
    </div>
  );
};

export default EmbedCard;
