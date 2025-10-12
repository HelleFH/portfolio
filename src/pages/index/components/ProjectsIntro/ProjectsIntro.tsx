import React from "react";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const ProjectsIntro: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 text-left">
      <h2 className="font-['PangramSans-Medium']  text-2xl font-semibold text-[rgba(var(--dark-color))] md:text-3xl">
        Experience & Projects
      </h2>
      <p>
        I’m a web and mobile developer specializing in React, React Native,
        TypeScript, and JavaScript. I have a strong foundation in HTML, CSS,
        and modern frontend tools such as Tailwind CSS and Bootstrap.
      </p>
      <p>
        My full-stack projects include a plant growth tracking app
        and a React-based e-commerce store.
      </p>
      <p>
        I’ve also collaborated on several React Native projects, including an
        AI-powered app for measuring truck fill rates and a client portal for
        data visualization and management. While I prefer working with
        MongoDB, I’m also proficient in SQL databases. I’m experienced in
        building and integrating RESTful APIs and GraphQL backends.
      </p>
      <p>You can find some of my recent work below.
       <a className="text-link" onClick={() => navigate("/CV")}>
       View My CV</a> to find out more about my professional experience.

       Or you can read more about what I do when I'm not at work on my 
       <a className="text-link" href="/about">About me</a> page
</p>
    </div>
  );
};

export default ProjectsIntro;
