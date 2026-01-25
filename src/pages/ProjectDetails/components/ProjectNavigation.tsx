const ProjectNavigation: React.FC<{
  onPrev: () => void;
  onNext: () => void;
}> = ({ onPrev, onNext }) => (
  <div className="flex justify-between items-center w-full mt-8 text-4xl text-gray-700 select-none">
    <button
      onClick={onPrev}
      className="p-4 active:scale-95 transition hover:text-[rgba(var(--darkgreen))]"
      aria-label="Previous Project"
    >
      &#x2039;
    </button>



    <button
      onClick={onNext}
      className="p-4 active:scale-95 transition hover:text-[rgba(var(--darkgreen))]"
      aria-label="Next Project"
    >
      &#x203A;
    </button>
  </div>
);

export default ProjectNavigation;
