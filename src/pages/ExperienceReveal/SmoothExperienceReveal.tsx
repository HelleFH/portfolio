import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Images from "../../assets/images";
import { SkillsLibrary } from "../../data/SkillsLibrary.tsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SoftSkills from "./SoftSkills.tsx";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export interface Job {
  image: string;
  title: string;
  company: string;
  years: string;
  description: string;
  skills?: (keyof typeof SkillsLibrary)[];
}

interface SmoothExperienceRevealProps {
  jobs: Job[];
}

export default function SmoothExperienceReveal({
  jobs,
}: SmoothExperienceRevealProps) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      id="smooth-wrapper"
      ref={smoothWrapperRef}
      className=" relative bg-cover bg-center bg-no-repeat min-h-screen mt-[7vh] z-[9999]"
      style={{
        backgroundImage: `linear-gradient(
    to bottom,
    rgba(var(--dark-color), 0.85) 0%,
    rgba(var(--dark-color), 0.85) 60%,
    rgba(var(--soft), 0.9) 100%
  ), url(${Images.HeroImage})`,
      }}     >
      <Navbar forceScrolled={true} />

      <div
        id="smooth-content"
        ref={smoothContentRef}
        className="text-black my-0 mx-auto mb-20  max-w-[1000px]"
      >

        {/* HEADER */}
        <header className="flex gap-3 mb-10">
          <div className="max-w-[80%] text-white p-3 bg-[rgba(var(--soft),0.1)] mx-auto my-20 md:flex-row flex-col flex gap-1 items-center justify-center rounded-xl">
            <div className="pl-5 flex-1 flex flex-col gap-4">
              <h2 className="text-3xl font-['inter']  text-white font-bold">Career & Education</h2>
           <p className="mb-10 flex flex-col gap-2 text-[rgba(var(--white))] font-['PangramSans-Medium'] text-left">
  <span>
    Here you can find more information about my background.
  </span>
  <span>
    <a
      href="https://your-about-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-break-spaces inline text-cyan-400 hover:underline"
    >
      Click here
    </a>{" "}
    for more information about me and what I do when I'm not working.
  </span>
  <span>
    Or{" "}
    <a
      href="https://your-projects-link.com"
      target="_blank"
      rel=" noopener noreferrer"
      className="whitespace-break-spaces inline text-cyan-400 hover:underline"
    >
      click here
    </a>{" "}
    for a list of my school and hobby development projects.
  </span>
</p>


            </div>
            <div className="flex-1 w-full relative">
              <img
                className="w-full rounded-lg object-cover"
                src={Images.CVImage}
                alt="CV preview"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-lg bg-[rgba(var(--darkgreen),0.2)]"></div>
            </div>
          </div>
          <div className="max-w-[40%] min-w-[250px] text-white px-2 bg-[rgba(var(--soft),0.1)] mx-auto my-20 md:flex-row flex-col flex gap-1 items-start justify-center rounded-xl">
            <SoftSkills />
          </div>
        </header>
        <div className="my-20 bg-[rgba(var(--dark-color),0.6)] p-10 w-full max-w-[1000px] mx-auto my-0 rounded-xl ">
          {/* JOB SECTIONS */}
          {jobs.map((job, index) => (
            <section
              key={index}
              className="text-[rgba(var(--white-color))]  my-0 mx-auto  job-section relative flex flex-col items-center justify-center min-h-screen px-4 bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"
              style={{ backgroundImage: `url(${job.image})` }}
              data-speed={0.8 + index * 0.2}
            >
              {/* 🔹 Color Overlay (adjust color & opacity below) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/60 to-black/70" />

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-center justify-start text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-white  drop-shadow-lg">
                  {job.title}
                </h2>
                <p className="text-[rgba(var(--lightgreen))] text-lg mt-2">
                  <span className="font-semibold">{job.company}</span> • {job.years}
                </p>
                <p className="text-[rgba(var(--soft))] text-xl mt-6 leading-relaxed">
                  {job.description}
                </p>
              </div>
              {job.skills && job.skills.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl text-[rgba(var(--soft))] text-center font-semibold mb-3 accent-zinc-100 relative">Skills Gained</h3>
                  <ul className="flex flex-wrap gap-2">
                    {job.skills.map((skillKey) => {
                      const skill = SkillsLibrary[skillKey];
                      return (
                        <li
                          key={skillKey}
                          className=" flex items-center gap-2 px-3 py-1 bg-[rgba(var(--cyan))] rounded-full text-sm backdrop-blur-md hover:bg-white/30 transition"
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
          ))}
        </div>
        <footer className="text-center py-20 bg-gray-900"> <p className="text-gray-500">End of CV</p> </footer>

      </div>
    </div>
  );
}
