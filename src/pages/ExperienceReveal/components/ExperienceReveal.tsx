import React, { useEffect, useState } from "react";
import Images from "../../../assets/images.tsx";
import { SkillsLibrary } from "../../../data/SkillsLibrary.tsx";
import Navbar from "../../../components/Navbar/Navbar.tsx";
import SoftSkills from "./SoftSkills.tsx";
import { Link } from "react-router-dom";
import TextLink from "../../../components/Links/TextLink.tsx";
import { ArrowRight, Home } from "lucide-react";

export interface Job {
  image:
    | string
    | {
        400: string;
        800: string;
        1200: string;
        1600: string;
      };
  title: string;
  company: string;
  years: string;
  description: string;
  skills?: (keyof typeof SkillsLibrary)[];
}

interface ExperienceRevealProps {
  jobs: Job[];
}

export default function ExperienceReveal({ jobs }: ExperienceRevealProps) {
  const [heroBg, setHeroBg] = useState(Images.hero[800]);

  useEffect(() => {
    const updateHero = () => {
      const w = window.innerWidth;
      if (w < 600) setHeroBg(Images.hero[400]);
      else if (w < 1000) setHeroBg(Images.hero[800]);
      else if (w < 1600) setHeroBg(Images.hero[1200]);
      else setHeroBg(Images.hero[1600]);
    };

    updateHero();
    window.addEventListener("resize", updateHero);
    return () => window.removeEventListener("resize", updateHero);
  }, []);

  return (
    <div className="min-h-screen bg-[rgba(var(--lightgreen),0.4)]">
      <Navbar forceScrolled />

      {/* Header */}
          <header className="max-w-[1000px] mx-auto flex-col md:flex-row flex gap-3 p-0 md:pt-[6rem] md:pb-[4rem]">
            <div className=" max-w-[96%] md:max-w-[80%] text-[rgba(var(--white-color))] p-3 bg-[rgba(var(--darkgreen),0.8)] mx-auto my-20 md:flex-row flex-col flex gap-3 items-center justify-center rounded-xl">
              <div className="pl-5 flex-1 flex flex-col gap-4">
                <h2 className="text-3xl font-['inter'] text-[rgba(var(--white-color))] font-bold">Career & Education</h2>
                <p className="mb-1 pr-4 text-justify flex flex-col gap-2 text-[rgba(var(--white))] font-['PangramSans-Medium'] ">
                  <span>Here you can find more information about professional experience and education.</span>
                  <span>
                    <Link
                      to="/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline text-[rgba(var(--lightgreen))] hover:underline  top-[1px]"
                    >
                      Click here
                    </ Link> {" "}
                    for more information about me and my background.
                  </span>
                  <span>
                    Or go to my {" "}
                    <Link
                      to="/project-overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline top-[1px] text-[rgba(var(--lightgreen))] hover:underline"
                    >
                      Project Page
                    </ Link> {" "}
                    to explore some of my development work.
                  </span>
                </p>
              </div>
              <div className="relative pr-2">
                <picture>
                  <source srcSet={Images.CVImage400}  />
     
                  <img
                    src={Images.CVImage400}
                    alt="CV preview"
                    className="w-full rounded-lg object-cover max-w-[250px]"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 rounded-lg max-w-[250px] bg-[rgba(var(--darkcolor),0.1)]"></div>
              </div>
            </div>
            <div className="mb-[10rem]  max-w-[96%] md:max-w-[45%] min-w-[300px] text-[rgba(var(--white-color))] px-2 bg-[rgba(var(--dark-color),0.5)]  mx-auto my-2 md:my-20 md:flex-row flex-col flex gap-1 items-start justify-center rounded-xl">
              <SoftSkills />
            </div>
          </header>

      {/* Experience */}
      <main className="max-w-5xl mx-auto px-4 pb-32 space-y-12">
        {jobs.map((job, index) => {
          const imageUrl =
            typeof job.image === "string"
              ? job.image
              : job.image[1200] || job.image[800];

          return (
            <section
              key={index}
              className="bg-white/90 rounded-xl overflow-hidden shadow-md"
            >
              <div className="grid md:grid-cols-3">
                <div
                  className="h-48 md:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />

                <div className="md:col-span-2 p-8 text-gray-900">
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">{job.company}</span> ·{" "}
                    {job.years}
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    {job.description}
                  </p>

                  {job.skills && job.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mt-6">
                      {job.skills.map((skillKey) => {
                        const skill = SkillsLibrary[skillKey];
                        return (
                          <li
                            key={skillKey}
                            className="px-3 py-1 text-sm bg-gray-100 rounded-full flex items-center gap-2"
                          >
                            {skill.icon}
                            <span className="font-['cup-cakes'] ">{skill.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-20 text-center space-y-6">
        <TextLink
          to="/project-overview"
          className="text-lg text-gray-300 flex justify-center items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 text-[rgba(var(--lightgreen))]" />
          View my work
        </TextLink>

        <TextLink
          to="/about"
          className="text-lg text-gray-300 flex justify-center items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 text-[rgba(var(--lightgreen))]" />
          About me
        </TextLink>

        <TextLink
          to="/"
          className="text-lg text-gray-300 flex justify-center items-center gap-2"
        >
          <Home className="w-4 h-4 text-[rgba(var(--lightgreen))]" />
          Home
        </TextLink>
      </footer>
    </div>
  );
}
