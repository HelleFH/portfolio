import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CloseButton from "../Buttons/CloseButton.tsx";
import './LoginModal.scss'

const LoginModal = ({ show, onHide, project }) => {
  const [copiedField, setCopiedField] = React.useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!show) return null; // Do not render modal if not shown

  return (
    <div className="login-modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal box */}
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-green-50 px-4 py-3 border-b">

          <h5 className="text-xl font-semibold">Login Details</h5>
          <CloseButton onClick={onHide} />

        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          {project?.username && (
            <div className="space-y-2">
              <p className="flex justify-between items-center bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors">
                <strong className="flex-1">User:</strong> {project.username}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopy(project.username, "username")}
                  className="ml-2 cursor-pointer text-gray-600 hover:text-black"
                />
                {copiedField === "username" && (
                  <span className="ml-2 text-green-600 text-sm animate-fadeOut">Copied!</span>
                )}
              </p>

              <p className="flex justify-between items-center bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors">
                <strong className="flex-1">Password:</strong> {project.password}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopy(project.password, "password")}
                  className="ml-2 cursor-pointer text-gray-600 hover:text-black"
                />
                {copiedField === "password" && (
                  <span className="ml-2 text-green-600 text-sm animate-fadeOut">Copied!</span>
                )}
              </p>
            </div>
          )}

          {project?.adminUsername && (
            <div className="space-y-2">
              <p className="flex justify-between items-center bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors">
                <strong className="flex-1">Admin:</strong> {project.adminUsername}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopy(project.adminUsername, "adminUsername")}
                  className="ml-2 cursor-pointer text-gray-600 hover:text-black"
                />
                {copiedField === "adminUsername" && (
                  <span className="ml-2 text-green-600 text-sm animate-fadeOut">Copied!</span>
                )}
              </p>

              <p className="flex justify-between items-center bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors">
                <strong className="flex-1">Password:</strong> {project.adminPassword}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopy(project.adminPassword, "adminPassword")}
                  className="ml-2 cursor-pointer text-gray-600 hover:text-black"
                />
                {copiedField === "adminPassword" && (
                  <span className="ml-2 text-green-600 text-sm animate-fadeOut">Copied!</span>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Footer (optional) */}
        <div className="bg-gray-100 p-4 border-t"></div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-fadeOut {
            animation: fadeOut 2s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LoginModal;
