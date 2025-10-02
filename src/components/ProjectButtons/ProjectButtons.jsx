import './ProjectButtons.scss';

const ProjectButtons = ({ projectLink, githubLink, buttonText, githubButtonText }) => {
  return (
    <div className="project-buttons">
      <button
        className="project-buttons__button project-buttons__button--project"
        onClick={() => window.open(projectLink, '_blank')}
      >
        {buttonText}
      </button>
      <button
        className="project-buttons__button project-buttons__button--github"
        onClick={() => window.open(githubLink, '_blank')}
      >
        {githubButtonText}
      </button>
    </div>
  );
};

export default ProjectButtons;
