import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextLink from "../../../../components/Links/TextLink.tsx";

const ProjectsIntro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-start gap-4 text-justify">
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
        <TextLink className="mr-1" to="/CV">
          View My CV
        </TextLink>
        to find out more about my professional experience.

        Or you can read more about my background on my

        <TextLink to="/about">About me
        </ TextLink>  page
      </p>
    </div>
  );
};

export default ProjectsIntro;
