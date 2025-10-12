import React from "react";
import SmoothExperienceReveal, { Job } from "./SmoothExperienceReveal.tsx";
import Images from "../../assets/images.tsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const jobs: Job[] = [
  {
    image: Images.SentispecImage,
    title: "Technical Support Specialist",
    company: "Sentispec",
    years: "2024–Present",
    description:
      "Technical support, customer success management, and marketing assistance. Developed company website using modern web technologies, contributed to a client portal in TypeScript, and managed troubleshooting.",
    skills: [
      "Technical Support",
      "Customer Service",
      "Hardware Support",
      "Project Management",
      "Content Creation",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    image: Images.WebDeveloperImage,
    title: "Web Development",
    company: "NEXT",
    years: "2022–2024",
    description:
      "Studied web development while doing temp work across industries during maternity leave.",
    skills: [
      "Web Development",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Problem Solving",
      "Time Management",
    ],
  },
  {
    image: Images.MaternityImage,
    title: "2x Maternity / Temp Work",
    company: "Icon Communications / Texas Instruments",
    years: "2019–2024",
    description:
      "Various temporary roles while on maternity leave, supporting different industries and gaining diverse work experience.",
    skills: [
      "Adaptability",
      "Time Management",
      "Organisational Skills",
      "Communication",
      "Problem Solving",
    ],
  },
  {
    image: Images.UniversityImage,
    title: "Biology/Chemistry",
    company: "University of Southern Denmark",
    years: "2017–2020",
    description:
      "Bachelor’s degree in Biology with Chemistry as a side major.",
    skills: [
      "Research",
      "Scientific Analysis",
      "Laboratory Techniques",
      "Data Interpretation",
      "Critical Thinking",
    ],
  },
  {
    image: Images.FreelancerImage,
    title: "Translator / Copywriter",
    company: "PokerStars / Freelance",
    years: "2012–2018",
    description:
      "Created translations and copy in English and Danish. Ranked #1 Danish translator and copywriter on Upwork and top 5% for English copywriting.",
    skills: [
      "Copywriting",
      "Content Creation",
      "Translation",
      "SEO Optimization",
      "Language Skills",
      "Attention to Detail",
    ],
  },
  {
    image: Images.TIImage,
    title: "Technical Support Specialist",
    company: "Icon Communications / Texas Instruments",
    years: "2011–2013",
    description:
      "Managed software deployments for Texas Instruments Education in Denmark. Oversaw rollout of math software in schools and provided long-term IT support. Created internal and customer-facing documentation.",
    skills: [
      "Technical Support",
      "IT Deployment",
      "Documentation",
      "Customer Service",
      "Training",
      "Problem Solving",
    ],
  },
  {
    image: Images.AccentureImage,
    title: "Nordic HR Team Lead",
    company: "Icon Communications / Unilever",
    years: "2008–2011",
    description:
      "Led the Scandinavian HR team for Unilever, managing onboarding and system rollouts (Oracle and PeopleSoft). Conducted process documentation and training across Nordic regions.",
    skills: [
      "Project Management",
      "Team Leadership",
      "Client Relations",
      "Customer Service",
      "HR Systems",
      "Training & Development",
    ],
  },
  {
    image: Images.SingaporeImage,
    title: "Executive Assistant",
    company: "Maersk",
    years: "2006–2008",
    description:
      "Planned and assisted at seminars across South East Asia. Organised travel, town hall meetings, and other events while gaining valuable administrative experience.",
    skills: [
      "Event Planning",
      "Administrative Support",
      "Organisation",
      "Communication",
      "Problem Solving",
    ],
  },
];


export default function ExperienceReveal() {
  return (

    <div className="ExperienceRevealContainer">
      <SmoothExperienceReveal jobs={jobs} />
    </div>
  );
}
