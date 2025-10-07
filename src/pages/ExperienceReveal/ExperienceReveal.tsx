import React, { useState, useRef, useEffect, WheelEvent, KeyboardEvent } from "react";
import Navbar from "../../components/Navbar/Navbar";

interface Job {
  image: string;
  title: string;
  company: string;
  years: string;
  description: string;
}

export default function ExperienceReveal() {
  const jobs: Job[] = [
    {
      image: "/images/sentispec.png",
      title: "Technical Support Specialist",
      company: "Sentispec",
      years: "2024–Present",
      description:
        "Technical support, customer success management, and marketing assistance. Developed company website using modern web technologies, contributed to a client portal in TypeScript, and managed internal/external troubleshooting.",
    },
    {
      image: "/images/unilever.png",
      title: "Nordic HR Team Lead",
      company: "Icon Communications / Unilever",
      years: "2017–2020",
      description:
        "Led the Scandinavian HR team for Unilever, managing onboarding and system rollouts (Oracle and PeopleSoft). Conducted process documentation and training across Nordic regions.",
    },
    {
      image: "/images/pokerstars.png",
      title: "Translator / Copywriter",
      company: "PokerStars / Freelance",
      years: "2016–2017",
      description:
        "Created translations and copy in English and Danish. Ranked #1 Danish translator and copywriter on Upwork and top 5% for English copywriting.",
    },
    {
      image: "/images/ti.png",
      title: "Technical Support Specialist",
      company: "Icon Communications / Texas Instruments",
      years: "2013–2017",
      description:
        "Managed software deployments for Texas Instruments Education in Denmark. Oversaw rollout of math software in schools and provided long-term IT support.",
    },
  ];

  const [currentJob, setCurrentJob] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [viewFull, setViewFull] = useState(false);
  const scrolling = useRef(false);

  const totalSubSteps = 4; // image -> title -> company+years -> description

  const handleScroll = (e: WheelEvent) => {
    if (scrolling.current || viewFull) return;
    scrolling.current = true;

    if (e.deltaY > 0) {
      if (subStep < totalSubSteps - 1) {
        setSubStep((prev) => prev + 1);
      } else if (currentJob < jobs.length - 1) {
        setCurrentJob((prev) => prev + 1);
        setSubStep(0);
      }
    } else {
      if (subStep > 0) {
        setSubStep((prev) => prev - 1);
      } else if (currentJob > 0) {
        setCurrentJob((prev) => prev - 1);
        setSubStep(totalSubSteps - 1);
      }
    }

    setTimeout(() => (scrolling.current = false), 800);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (viewFull) return;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      if (subStep < totalSubSteps - 1) {
        setSubStep((prev) => prev + 1);
      } else if (currentJob < jobs.length - 1) {
        setCurrentJob((prev) => prev + 1);
        setSubStep(0);
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (subStep > 0) {
        setSubStep((prev) => prev - 1);
      } else if (currentJob > 0) {
        setCurrentJob((prev) => prev - 1);
        setSubStep(totalSubSteps - 1);
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (viewFull) {
    return (
      <div>
      <div className="p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Full Experience</h1>
        <ul className="space-y-6">
          {jobs.map((job, index) => (
            <li key={index} className="border-b border-gray-700 pb-4">
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <p className="text-blue-300">
                {job.company} • {job.years}
              </p>
              <p className="mt-2">{job.description}</p>
            </li>
          ))}
        </ul>
        <button
          className="mt-8 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          onClick={() => setViewFull(false)}
        >
          Back to Reveal
        </button>
      </div>
      </div>
    );
  }

  return (
    <div
      onWheel={handleScroll}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(var(--darkgreen),0.6)] to-[rgba(var(--soft))] text-white"
    >
            <Navbar />

      <div className="flex flex-col items-center justify-center text-center space-y-6 px-8 transition-all duration-700 ease-in-out">
        {jobs[currentJob].image && (
          <img
            src={jobs[currentJob].image}
            alt={jobs[currentJob].title}
            className={`w-64 h-64 object-contain rounded-2xl shadow-2xl transition-opacity duration-700 ${
              subStep >= 0 ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <h2
          className={`text-3xl md:text-4xl font-bold transition-opacity duration-700 ${
            subStep >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {jobs[currentJob].title}
        </h2>
        <p
          className={`text-lg md:text-xl text-blue-300 transition-opacity duration-700 ${
            subStep >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-semibold">{jobs[currentJob].company}</span> • {jobs[currentJob].years}
        </p>
        <p
          className={`max-w-2xl text-base md:text-lg text-gray-200 mt-4 transition-opacity duration-700 ${
            subStep >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          {jobs[currentJob].description}
        </p>
      </div>

      {/* Scroll hint or View Full button */}
      <div className="absolute bottom-8 text-gray-400 text-sm animate-pulse flex flex-col items-center">
        {currentJob === jobs.length - 1 && subStep === totalSubSteps - 1 ? (
          <>
            <span>End of experience</span>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              onClick={() => setViewFull(true)}
            >
              View Full
            </button>
          </>
        ) : (
          "Scroll or press ↓ to continue / ↑ to go back"
        )}
      </div>
    </div>
  );
}
