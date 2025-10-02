import Images from '../assets/images';


export const skills = [
  {
    title: "Skills",
    sections: [
      {
        title: "Web Development",
        image: {
          src: Images.DesignIcon,
          alt: "Full Stack Development",
        },
        description:
          "I develop scalable, efficient, and maintainable web applications using modern frameworks and technologies.",
        listTitle: "Technologies & Languages",
        technologies: [
          "JavaScript (ES6+)",
          "TypeScript",
          "React.js / Redux",
          "Vue.js",
          "Node.js / Express.js",
          "MongoDB",
          "Firebase",
        ],
      },
      {
        title: "Backend & API Development",
        image: {
          src: Images.CodingIcon,
          alt: "Backend Development",
        },
        description:
          "I build and manage robust backend systems, including RESTful and GraphQL APIs, ensuring performance and security.",
        listTitle: "Technologies & Tools",
        technologies: [
          "Node.js / Express.js",
          "Python",
          "Firebase",
          "PostgreSQL",
          "MongoDB",
          "JWT",
          "OAuth",
          "Firebase Auth",
        ],
      },
      {
        title: "Cloud, DevOps & Support",
        image: {
          src: Images.ITIcon,
          alt: "Cloud & DevOps",
        },
        description:
          "I have experience managing cloud infrastructure, automating deployments, and optimizing system performance.",
        listTitle: "Cloud & DevOps Tools",
        technologies: [
          "Microsoft Azure",
          "AWS",
          "Docker",
          "Kubernetes",
          "CI/CD (GitHub Actions, Jenkins)",
          "SQL Server",
          "PostgreSQL",
        ],
      },
    ],
  },
];
