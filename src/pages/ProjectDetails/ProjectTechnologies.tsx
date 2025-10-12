const ProjectTechnologies: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => (
  <>
    <h4 className="mx-auto text-xl font-semibold mt-4">Technologies Used</h4>
    <ul className="mx-auto flex flex-wrap gap-3 font-semibold uppercase text-gray-700 text-sm">
      {technologies.map((tech, i) => (
        <li
          key={i}
          className="flex items-center after:content-['•'] after:mx-2 last:after:content-none"
        >
          {tech}
        </li>
      ))}
    </ul>
  </>
);

export default ProjectTechnologies;
