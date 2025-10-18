import { ResponsiveSrc } from "./resposiveSrc";

export interface EmbedCardProps {
  type: EmbedType;
  title: string;
  src: string | ResponsiveSrc;
  link: string;
}
type EmbedType = "image" | "video" | "figma";
