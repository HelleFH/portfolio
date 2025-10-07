import './ProjectButtons.scss';
import Button from '../Buttons/Button.tsx';

const ProjectButtons = ({ projectLink, githubLink, buttonText, githubButtonText }) => {
  return (
    <div className="project-buttons">
      <Button
        bgColor="rgb(var(--darkgreen)"

        className="project-buttons__button project-buttons__button--project text-white"
        onClick={() => window.open(projectLink, '_blank')}
      >
        {buttonText}
      </Button>
      <Button
        bgColor="transparent"
        fontColor="rgb(var(--black-color)"
        className="project-buttons__button project-buttons__button--github"
        onClick={() => window.open(githubLink, '_blank')}
      >
        {githubButtonText}
      </Button>
    </div>
  );
};

export default ProjectButtons;
