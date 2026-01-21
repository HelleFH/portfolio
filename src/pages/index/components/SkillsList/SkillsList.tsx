import React from "react";
import { skillIcons } from "../../../../components/Pills/SkillIcons.tsx";
import AnimatedSection from "../../../../components/AnimatedSection.jsx";

const frontendSkills = [
  "HTML", "JavaScript", "CSS/SCSS", "TypeScript", "React", "Vue", "PHP", "Next.js",
  "Redux", "Firebase", "GraphQL", "RESTful API",
];

const stylingSkills = [
  "Canva", "Figma", "Tailwind CSS", "Bootstrap", "Styled Components",
];

const miscSkills = [
  "Webpack", "Git", "Jest", "Postman", "Playwright",
];

const SkillsList: React.FC = () => {
  const renderList = (title: string, items: string[]) => (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-[rgba(var(--dark-color))]">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-2 rounded-lg bg-[rgba(var(--darkgreen),0.1)] font-['cup-cakes'] text-md text-black px-3 py-1 shadow-sm transition hover:bg-indigo-100"
          >
            {skillIcons[skill] || null}
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-4xl  px-6 ">
      <h2 className="mb-2 font-[lato] text-2xl font-semibold text-[rgba(var(--dark-color))] md:text-3xl">
        Technologies</h2>
      <div className="flex flex-col gap-8 md:grid-cols-3">
        <AnimatedSection>        {renderList("Frontend", frontendSkills)}
        </AnimatedSection>
        <AnimatedSection>
          {renderList("Styling & Design", stylingSkills)}
        </AnimatedSection>
        <AnimatedSection>
          {renderList("Other", miscSkills)}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SkillsList;
