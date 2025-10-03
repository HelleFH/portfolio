import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './LoginModal.scss'; // global SCSS, not CSS modules
import CloseButton from '../Buttons/CloseButton.tsx';
const LoginModal = ({ show, onHide, project }) => {

  const [copiedField, setCopiedField] = React.useState(null);

const handleCopy = (text, field) => {
  navigator.clipboard.writeText(text);
  setCopiedField(field);

  setTimeout(() => {
    setCopiedField(null);
  }, 2000);
};

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" className="login-modal">
      <Modal.Header >
        <CloseButton      onClick={onHide} />
        <Modal.Title>Login Details</Modal.Title>
      </Modal.Header>
<Modal.Body>
  {project?.username && (
    <div className="login-row">
      <p>
        <strong>User:</strong> {project.username}
        <FontAwesomeIcon
          icon={faCopy}
          onClick={() => handleCopy(project.username, 'username')}
          className="copy-icon"
        />
        {copiedField === 'username' && <span className="copied">Copied!</span>}
      </p>
      <p>
        <strong>Password:</strong> {project.password}
        <FontAwesomeIcon
          icon={faCopy}
          onClick={() => handleCopy(project.password, 'password')}
          className="copy-icon"
        />
        {copiedField === 'password' && <span className="copied">Copied!</span>}
      </p>
    </div>
  )}

  {project?.adminUsername && (
    <div className="login-row">
      <p>
        <strong>Admin:</strong> {project.adminUsername}
        <FontAwesomeIcon
          icon={faCopy}
          onClick={() => handleCopy(project.adminUsername, 'adminUsername')}
          className="copy-icon"
        />
        {copiedField === 'adminUsername' && <span className="copied">Copied!</span>}
      </p>
      <p>
        <strong>Password:</strong> {project.adminPassword}
        <FontAwesomeIcon
          icon={faCopy}
          onClick={() => handleCopy(project.adminPassword, 'adminPassword')}
          className="copy-icon"
        />
        {copiedField === 'adminPassword' && <span className="copied">Copied!</span>}
      </p>
    </div>
  )}
</Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
