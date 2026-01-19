import { Search, Layers, Wind, Target, Rocket } from "lucide-react";

export default function SoftSkillsMini() {
  const skills = [
    { icon: <Search className="w-4 h-4 text-[rgba(var(--soft))]" />, text: "Identify nuances and small inaccuracies" },
    { icon: <Layers className="w-4 h-4 text-[rgba(var(--soft))]" />, text: "Create order out of chaos" },
    { icon: <Wind className="w-4 h-4 text-[rgba(var(--soft))]" />, text: "Calm by nature, unaffected by trivialities" },
    { icon: <Target className="w-4 h-4 text-[rgba(var(--soft))]" />, text: "Carry out my intentions" },
    { icon: <Rocket className="w-4 h-4 text-[rgba(var(--soft))]" />, text: "Adapt quickly to new roles" },
  ];

  return (
    <section className="max-w-3xl px-5 pt-5 pb-7 mx-auto text-[rgba(var(--white),0.9)]">
      <h2 className="text-xl font-semibold mb-4 text-[rgba(var(--white))] tracking-wide">
        My Strongest Soft Skills
      </h2>
      <ul className="space-y-2 gap-2 flex flex-col text-sm md:text-base">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-[rgba(var(--white),0.8)]">
            <span className="flex-shrink-0 opacity-80">{skill.icon}</span>
            <span className="leading-snug -mt-[3px]">{skill.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
