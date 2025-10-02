// SocialLinks.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.scss';
const SocialLinks = ({ onClick }) => {
  return (
    <div className="social-links-container">
      <a
        href="https://www.linkedin.com/in/helle-fruergaard-577763112/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>

      <a
        href="https://github.com/HelleFH"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
  );
};

export default SocialLinks;
