// skillIcons.tsx
import { JSX } from "react";
import PlaywrightIcon from "./PlaywrightIcon.tsx";


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiPhp,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiGraphql,
  SiCanva,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiStyledcomponents,
  SiWebpack,
  SiGit,
  SiJest,
  SiPostman,
} from "react-icons/si";

export const skillIcons: Record<string, JSX.Element> = {
  HTML: <SiHtml5 className="text-orange-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "CSS/SCSS": <SiCss3 className="text-blue-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <SiReact className="text-cyan-400" />,
  Vue: <SiVuedotjs className="text-green-500" />,
  PHP: <SiPhp className="text-indigo-600" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  Redux: <SiRedux className="text-purple-600" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  GraphQL: <SiGraphql className="text-pink-500" />,
  "REST APIs": <SiJest className="text-gray-700" />,
  Canva: <SiCanva className="text-blue-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  "Styled Components": <SiStyledcomponents className="text-pink-600" />,
  Webpack: <SiWebpack className="text-blue-700" />,
  Git: <SiGit className="text-red-500" />,
  Jest: <SiJest className="text-red-600" />,
  Postman: <SiPostman className="text-orange-500" />,
  Playwright: <PlaywrightIcon className="text-purple-500" />,

};
