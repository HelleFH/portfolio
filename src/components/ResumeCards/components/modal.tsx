import React, { ReactNode } from "react";
import '../css/findMatchesModal.scss'

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div className="resume-modal-overlay resume-modal">
      <div
        className="close-modal-button"
        onClick={closeModal}
        style={{ cursor: "pointer" }}
      >
        <p>&#x2715;</p>
      </div>
      {children}
    </div>
  );
};

export default Modal;
