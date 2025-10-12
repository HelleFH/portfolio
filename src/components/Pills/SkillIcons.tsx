import { JSX } from "react";
import PlaywrightIcon from "./PlaywrightIcon.tsx";
import { FaPython } from "react-icons/fa";
import { RiBookFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { BiCheckCircle } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";
import { SiPhp } from "react-icons/si";


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
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
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiExpo,
  SiGooglecloud,
  SiHubspot,
  SiYoutube,
  SiJquery,
  SiFlask,
  SiAxios,
  SiJsonwebtokens,
  SiDotenv,
  SiSwagger,
} from "react-icons/si";

export const skillIcons: Record<string, JSX.Element> = {
  // --- Core Web ---
  HTML: <SiHtml5 className="text-orange-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  CSS: <SiCss3 className="text-blue-500" />,
  "CSS/SCSS": <SiCss3 className="text-blue-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,

  // --- Frameworks ---
  React: <SiReact className="text-[rgba(var(--cyan))]" />,
  "React Native": <TbBrandReactNative className="text-cyan-500" />,
  Vue: <SiVuedotjs className="text-green-500" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  Flask: <SiFlask className="text-gray-800" />,

  // --- Styling ---
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  "Styled Components": <SiStyledcomponents className="text-pink-600" />,

  // --- Backend / Infra ---
  Node: <SiNodedotjs className="text-green-600" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  Express: <SiExpress className="text-gray-700" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  GraphQL: <SiGraphql className="text-pink-500" />,
  Cloudinary: <SiCloudinary className="text-sky-400" />,
  PHP: <SiPhp className="text-indigo-500" />,


  // --- Dev Tools ---
  Git: <SiGit className="text-red-500" />,
  Webpack: <SiWebpack className="text-blue-700" />,
  Jest: <SiJest className="text-red-600" />,
  Postman: <SiPostman className="text-orange-500" />,
  Playwright: <PlaywrightIcon className="text-purple-500" />,
  Redux: <SiRedux className="text-purple-600" />,
  Vite: <SiVite className="text-yellow-400" />,
  Nodemon: <SiNodedotjs className="text-green-600" />,
  "RESTful API": <SiSwagger className="text-blue-500" />,
  "React Swipable": <SiReact className="text-[rgba(var(--cyan))]" />,
  Axios: <SiAxios className="text-blue-500" />,
  Bcrypt: <SiNodedotjs className="text-green-600" />,
  Bcryptjs: <SiNodedotjs className="text-green-600" />,
  Jsonwebtoken: <SiJsonwebtokens className="text-yellow-500" />,
  Dotenv: <SiDotenv className="text-gray-700" />,
  Zustand: <SiReact className="text-[rgba(var(--cyan))]" />,
  Formik: <SiReact className="text-[rgba(var(--cyan))]" />,
  Yup: <BiCheckCircle className="text-green-500" />,
  Moment: <MdTimeline className="text-emerald-500" />,
  "Moment.js": <MdTimeline className="text-emerald-500" />,
  Enzyme: <SiJest className="text-red-600" />,

  // --- APIs / Integrations ---
  "HubSpot APIs": <SiHubspot className="text-red-500" />,
  "YouTube integration": <SiYoutube className="text-red-500" />,
  "Outlook integration": <RiBookFill className="text-blue-600" />,
  "Google integration": <SiGooglecloud className="text-blue-400" />,
  "Bassin integration": <SiGooglecloud className="text-gray-400" />,

  // --- Design Tools ---
  Canva: <SiCanva className="text-blue-400" />,
  Figma: <SiFigma className="text-pink-400" />,

  // --- Mobile ---
  Expo: <SiExpo className="text-black" />,

  // --- Other / Misc ---
  Python: <FaPython className="text-yellow-400" />,
  JQuery: <SiJquery className="text-blue-500" />,
  JSON: <SiJsonwebtokens className="text-yellow-500" />,
  "p5.js": <SiJavascript className="text-yellow-400" />,
  AJAX: <SiJavascript className="text-yellow-400" />,
};
