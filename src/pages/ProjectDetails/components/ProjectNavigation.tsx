const ProjectNavigation: React.FC<{
  onPrev: () => void;
  onNext: () => void;
}> = ({ onPrev, onNext }) => (
  <div className="flex justify-between w-full mt-8 text-4xl text-gray-700">
    <button
      onClick={onPrev}
      className="hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300"
      aria-label="Previous Project"
    >
      &#x2039;
    </button>
    <button
      onClick={onNext}
      className="hover:text-[rgba(var(--darkgreen))]-800 transition-colors duration-300"
      aria-label="Next Project"
    >
      &#x203A;
    </button>
  </div>
);

export default ProjectNavigation;
