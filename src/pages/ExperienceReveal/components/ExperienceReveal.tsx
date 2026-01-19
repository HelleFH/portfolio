import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Images from "../../../assets/images.tsx";
import { SkillsLibrary } from "../../../data/SkillsLibrary.tsx";
import Navbar from "../../../components/Navbar/Navbar.tsx";
import SoftSkills from "./SoftSkills.tsx";
import { Link } from "react-router-dom";
import TextLink from "../../../components/Links/TextLink.tsx";
import { ArrowRight, FolderOpen, Home, Info } from "lucide-react";

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

  useEffect(() => {
  const sections = gsap.utils.toArray<HTMLElement>(".job-section");
  const dots = gsap.utils.toArray<HTMLElement>(".timeline-dot");
  const mobileDots = gsap.utils.toArray<HTMLElement>(".timeline-dot-mobile");

  /* ===== Scroll Progress ===== */
  ScrollTrigger.create({
    trigger: smoothContentRef.current,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      gsap.to("#timeline-progress", {
        scaleY: self.progress,
        ease: "none",
      });

      gsap.to("#timeline-progress-mobile", {
        scaleX: self.progress,
        ease: "none",
      });
    },
  });

  /* ===== Section Activation + Pulse ===== */
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      snap: 1, // 🎯 snapping
      onEnter: () => activate(index),
      onEnterBack: () => activate(index),
    });
  });

  function activate(index: number) {
    [...dots, ...mobileDots].forEach((dot, i) => {
      if (i === index) {
        gsap.to(dot, {
          scale: 1.6,
          backgroundColor: "rgba(var(--lightgreen))",
          boxShadow: "0 0 0 8px rgba(0,255,170,0.2)",
          repeat: -1,
          yoyo: true,
          duration: 0.8,
        });
      } else {
        gsap.killTweensOf(dot);
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "gray",
          boxShadow: "none",
          duration: 0.3,
        });
      }
    });
  }
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
      />
{/* Scroll Timeline */}
<div className="fixed z-50 pointer-events-none md:pointer-events-auto
                right-6 top-1/2 -translate-y-1/2
                md:flex hidden
                flex-col items-center">

  <div className="relative h-[60vh] w-[2px] bg-black">
    <div
      id="timeline-progress"
      className="absolute top-0 left-0 w-full bg-[rgba(var(--lightgreen))] origin-top scale-y-0"
    />
  </div>

  <div className="absolute top-0 left-1/2 -translate-x-1/2
                  h-[60vh] flex flex-col justify-between">
    {jobs.map((job, i) => (
      <div
        key={i}
        className="timeline-dot group relative w-2 h-2 rounded-full bg-gray"
        data-title={job.title}
      >
        {/* Tooltip */}
        <span className="absolute right-6 top-1/2 -translate-y-1/2
                         opacity-0 group-hover:opacity-100
                         bg-black/80 text-[rgba(var(--white-color))] text-xs px-2 py-1 rounded
                         whitespace-nowrap transition">
          {job.title}
        </span>
      </div>
    ))}
  </div>
</div>

{/* Mobile Horizontal Timeline */}
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                md:hidden flex items-center w-[80vw]">
  <div className="relative h-[2px] w-full bg-white/20">
    <div
      id="timeline-progress-mobile"
      className="absolute top-0 left-0 h-full bg-[rgba(var(--lightgreen))] origin-left scale-x-0"
    />
  </div>

  <div className="absolute left-0 top-1/2 -translate-y-1/2
                  w-full flex justify-between">
    {jobs.map((job, i) => (
      <div
        key={i}
        className="timeline-dot-mobile w-3 h-3 rounded-full bg-black/30"
      />
    ))}
  </div>
</div>


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
            <div className=" max-w-[96%] md:max-w-[80%] text-[rgba(var(--white-color))] p-3 bg-[rgba(var(--dark-color),0.5)] mx-auto my-20 md:flex-row flex-col flex gap-3 items-center justify-center rounded-xl">
              <div className="pl-5 flex-1 flex flex-col gap-4">
                <h2 className="text-3xl font-['inter'] text-[rgba(var(--white-color))] font-bold">Career & Education</h2>
                <p className="mb-1 md:mb-10 pr-4 text-justify flex flex-col gap-2 text-[rgba(var(--white))] font-['PangramSans-Medium'] ">
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
                <div className="absolute inset-0 rounded-lg max-w-[250px] bg-[rgba(var(--darkgreen),0.1)]"></div>
              </div>
            </div>
            <div className="mb-[10rem]  max-w-[96%] md:max-w-[45%] min-w-[300px] text-[rgba(var(--white-color))] px-2 bg-[rgba(var(--dark-color),0.5)]  mx-auto my-2 md:my-20 md:flex-row flex-col flex gap-1 items-start justify-center rounded-xl">
              <SoftSkills />
            </div>
          </header>

          {/* JOB SECTIONS */}
          <div className="my-1 bg-[rgba(var(--dark-color),0.6)] p-1 md:p-10 w-full max-w-[700px] mx-auto rounded-xl">
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
                    <h2 className="text-4xl font-bold text-[rgba(var(--white-color))] drop-shadow-lg">{job.title}</h2>
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
            <TextLink
              to="/project-overview"
              className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5 text-[rgba(var(--lightgreen))]" />
              Click here for some examples of my work
            </TextLink>

            <TextLink
              to="/about"
              className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5 text-[rgba(var(--lightgreen))]" />
              Click here to learn more about me
            </TextLink>

            <TextLink
              to="/"
              className="text-xl !text-[rgba(var(--soft))] flex items-center gap-2"
            >
              <Home className="w-5 h-5 text-[rgba(var(--lightgreen))]" />
              Home
            </TextLink>
          </footer>
        </div>
      </div>
    </div>
  );
}
