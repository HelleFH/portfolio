const ProjectDetailsList: React.FC<{ details: string[] }> = ({ details }) => (
  <>
    <h4 className="text-center text-xl font-semibold mt-4">
      Project Features
    </h4>
    <ul className="mx-auto list-none pl-0 space-y-2">
      {details.map((detail, i) => (
        <li
          key={i}
          className="relative pl-6 text-gray-700 before:content-['✦'] before:absolute before:left-0 before:text-teal-500"
        >
          {detail}
        </li>
      ))}
    </ul>
  </>
);

export default ProjectDetailsList;
