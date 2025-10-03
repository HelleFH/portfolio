import './ProjectButtons.scss';
import Button from '../Buttons/Button.tsx';

const ProjectButtons = ({ projectLink, githubLink, buttonText, githubButtonText }) => {
  return (
    <div className="project-buttons">
      <Button
            bgColor="#324b4b"

        className="project-buttons__button project-buttons__button--project"
        onClick={() => window.open(projectLink, '_blank')}
      >
        {buttonText}
      </Button>
      <Button
      bgColor="transparent"
      fontColor="black"
        className="project-buttons__button project-buttons__button--github"
        onClick={() => window.open(githubLink, '_blank')}
      >
        {githubButtonText}
      </Button>
    </div>
  );
};

export default ProjectButtons;
