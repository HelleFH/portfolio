
export interface Embed {
  id: number;
  type: EmbedType;
  title: string;
  src: string | { 400: string; 800: string; 1200: string; 1600: string };
  link: string;
}
type EmbedType = "image" | "video" | "figma";
