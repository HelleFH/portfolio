import React from "react";

interface ResponsiveImageProps {
  imageSet: {
    400: string;
    800: string;
    1200: string;
    1600: string;
  };
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ imageSet, alt, className }) => {
  return (
    <picture>
      <source srcSet={imageSet[1600]} media="(min-width: 1200px)" />
      <source srcSet={imageSet[1200]} media="(min-width: 800px)" />
      <source srcSet={imageSet[800]} media="(min-width: 400px)" />
      <img
        src={imageSet[400]} // fallback
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;
