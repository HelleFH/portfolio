export interface ResponsiveImageProps {
  imageSet: {
    400: string;
    800: string;
    1200: string;
    1600: string;
  };
  alt: string;
  className?: string;
}