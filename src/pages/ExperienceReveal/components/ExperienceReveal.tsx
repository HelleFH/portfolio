import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Images from "../../../assets/images.tsx";
import { SkillsLibrary } from "../../../data/SkillsLibrary.tsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import SoftSkills from "./SoftSkills.tsx";
import { Link } from "react-router-dom";
import TextLink from "../../../components/Links/TextLink.tsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const [heroBg, setHeroBg] = useState(Images.hero[800]);

  // Initialize GSAP ScrollSmoother
  useEffect(() => {
    if (!smoothWrapperRef.current || !smoothContentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Responsive hero background
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
    <div className="relative min-h-screen">
                <Navbar forceScrolled={true} />

      {/* Fixed Hero Background */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-[rgba(var(--dark-color),0.9)] via-[rgba(var(--dark-color),0.9)] to-[rgba(var(--soft),0.6)]" />

      {/* ScrollSmoother wrapper */}
      <div
        id="smooth-wrapper"
        ref={smoothWrapperRef}
        className="relative z-0"
      >
        <div
          id="smooth-content"
          ref={smoothContentRef}
          className="text-black w-full"
        >

          {/* HEADER */}
          <header className="max-w-[1000px] mx-auto flex-col md:flex-row flex gap-3 p-0 md:pt-[6rem] md:pb-[4rem]">
            <div className=" max-w-[96%] md:max-w-[80%] text-white p-3 bg-[rgba(var(--dark-color),0.5)] mx-auto my-20 md:flex-row flex-col flex gap-3 items-center justify-center rounded-xl">
              <div className="pl-5 flex-1 flex flex-col gap-4">
                <h2 className="text-3xl font-['inter'] text-white font-bold">Career & Education</h2>
                <p className="mb-1 md:mb-10 pr-4 text-justify flex flex-col gap-2 text-[rgba(var(--white))] font-['PangramSans-Medium'] ">
                  <span>Here you can find more information about my background.</span>
                  <span>
                    <Link
                      to="/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline text-[rgba(var(--lightgreen))] hover:underline  top-[1px]"
                    >
                      Click here
                    </ Link> {" "}
                    for more information about me and what I do when I'm not working.
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
                  <source srcSet={Images.CVImage[1600]} media="(min-width: 1200px)" />
                  <source srcSet={Images.CVImage[1200]} media="(min-width: 800px)" />
                  <source srcSet={Images.CVImage[800]} media="(min-width: 400px)" />
                  <img
                    src={Images.CVImage[400]}
                    alt="CV preview"
                    className="w-full rounded-lg object-cover max-w-[250px]"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 rounded-lg max-w-[250px] bg-[rgba(var(--darkgreen),0.2)]"></div>
              </div>
            </div>
            <div className="mb-[10rem] md:mb-0 max-w-[96%] md:max-w-[45%] min-w-[300px] text-white px-2 bg-[rgba(var(--dark-color),0.5)]  mx-auto my-2 md:my-20 md:flex-row flex-col flex gap-1 items-start justify-center rounded-xl">
              <SoftSkills />
            </div>
          </header>

          {/* JOB SECTIONS */}
          <div className="my-1 bg-[rgba(var(--dark-color),0.6)] p-1 md:p-10 w-full max-w-[1000px] mx-auto rounded-xl">
            {jobs.map((job, index) => {
              const imageUrl =
                typeof job.image === "string"
                  ? job.image
                  : job.image[1600] || job.image[1200] || job.image[800] || job.image[400];

              return (
                <section
                  key={index}
                  className="text-[rgba(var(--white-color))] my-0 mx-auto job-section relative flex flex-col items-center justify-center min-h-screen px-4 bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                  data-speed={0.8 + index * 0.1}
                >
                  {/* 🔹 Color Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/60 to-black/70" />

                  {/* Text content */}
                  <div className="relative z-10 flex flex-col items-center justify-start text-center max-w-3xl">
                    <h2 className="text-4xl font-bold text-white drop-shadow-lg">{job.title}</h2>
                    <p className="text-[rgba(var(--lightgreen))] text-lg mt-2">
                      <span className="font-semibold">{job.company}</span> • {job.years}
                    </p>
                    <p className="text-[rgba(var(--soft))] text-xl mt-6 leading-relaxed">{job.description}</p>
                  </div>

                  {job.skills && job.skills.length > 0 && (
                    <div className="mt-8 z-[9999]">
                      <h3 className="text-xl text-[rgba(var(--soft))] text-center font-semibold mb-3 accent-zinc-100 relative">
                        Skills Gained
                      </h3>
                      <ul className="flex flex-wrap justify-center gap-2">
                        {job.skills.map((skillKey) => {
                          const skill = SkillsLibrary[skillKey];
                          return (
                            <li
                              key={skillKey}
                              className="flex items-center gap-2 px-3 py-1 bg-[rgba(var(--cyan))] rounded-full text-sm backdrop-blur-md hover:bg-white/30 transition"
                            >
                              {skill.icon}
                              <span className="font-['cup-cakes']">{skill.name}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          <footer className="text-center flex flex-col justify-center items-center py-20 bg-gray-900 w-full">
            <img src={Images.FooterLogo} className="max-w-20 absolute mb-10 opacity-20" />
            <TextLink to="/project-overview" className="text-xl !text-[rgba(var(--soft))]">Click here for some examples of my work</ TextLink> {" "}
            <TextLink to="/about" className="text-xl !text-[rgba(var(--soft))]">Click here to learn more about me</ TextLink> 
            <TextLink to="/" className="text-xl !text-[rgba(var(--soft))]">Home</ TextLink> 

          </footer>
        </div>
      </div>
    </div>
  );
}
